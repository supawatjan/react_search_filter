import { useEffect, useState } from "react";
import { Cards, FilterBtn, SearchBox } from "./components";
import mockData from "./data/MOCK_DATA.json";

const initialState = {
  userData: [],
  countryName: [],
  genderName: [],
  filterBtn: {}, //collect object of button
  filterWord: "",
  filteredUserData: [],
};
function App() {
  const [state, setState] = useState(initialState);
  const initData = async () => {
    //set user data
    setState((prev) => {
      return {
        ...prev,
        userData: mockData,
        filteredUserData: mockData,
      };
    });

    // set filter name
    setFilterName();
  };

  const setFilterName = async () => {
    const tempCountryName = [];
    const tempGenderName = [];

    mockData.forEach((user) => {
      //collect country name
      if (tempCountryName.indexOf(user?.country) === -1) {
        tempCountryName.push(user?.country);
      }

      if (tempGenderName.indexOf(user?.gender) === -1) {
        tempGenderName.push(user?.gender);
      }
    });

    setState((prev) => {
      return {
        ...prev,
        countryName: tempCountryName,
        genderName: tempGenderName,
      };
    });
  };

  const setFilterBtn = async ({ name, value }) => {
    setState((prev) => {
      return {
        ...prev,
        filterBtn: { ...prev.filterBtn, [name]: value },
      };
    });

    return true;
  };
  const handleFilterBtn = async (e) => {
    let { name, value } = e.target;
    // set filterBtn
    setFilterBtn({ name, value });
    const filterItemTemp = { ...state.filterBtn, [name]: value };

    // data init
    const stateUserData = [...state.userData];

    //filter follow key in filteredBtn
    const result = stateUserData.filter((user) => {
      for (let key in filterItemTemp) {
        if (!user[key] || user[key] !== filterItemTemp[key]) return false;
      }
      return true;
    });

    // set filtered user
    setState((prev) => {
      return {
        ...prev,
        filteredUserData: result,
      };
    });
  };

  const clearSearchFilter = () => {
    setState((prev) => {
      return {
        ...prev,
        filteredUserData: state.userData,
        filterBtn: {},
        filterWord: "",
      };
    });
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;

    setState((prev) => {
      return {
        ...prev,
        filterWord: value,
      };
    });
  };

  // change cards show while user enter search input
  useEffect(() => {
    // data init
    let stateUserData = [...state.userData];
    stateUserData = stateUserData.map((user) => {
      return {
        ...user,
        ["full_name"]: user?.first_name + " " + user?.last_name,
      };
    });
    // clear filter btn
    if (state.filterWord.length === 1) {
      setState((prev) => {
        return {
          ...prev,
          filteredUserData: state.userData,
          filterBtn: {},
        };
      });
    }
    // the key u prefer
    const filterKey = ["first_name", "last_name", "full_name"];

    const result = stateUserData.filter((user) => {
      return filterKey.some((key) => {
        if (user[key]) {
          return (
            user[key].toLowerCase().indexOf(state.filterWord.toLowerCase()) > -1
          );
        } else {
          return false;
        }
      });
    });

    //set filteredUserData
    setState((prev) => {
      return {
        ...prev,
        filteredUserData: result,
      };
    });
  }, [state.filterWord]);

  // init data
  useEffect(() => {
    initData();
  }, []);

  const functionContainer = {
    handleFilterBtn,
    handleSearchChange,
    clearSearchFilter,
  };

  return (
    <div className="container mx-auto px-2">
      <header className="text-center py-4">
        <h1 className="text-4xl font-bold">MLB Test</h1>
      </header>
      <section className="flex flex-col gap-y-8">
        <FilterBtn {...state} {...functionContainer} />
        <SearchBox {...state} {...functionContainer} />
        <Cards {...state} {...functionContainer} />
      </section>
    </div>
  );
}

export default App;
