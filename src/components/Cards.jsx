import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

function Cards({ filteredUserData }) {
  return (
    <>
      <div className="flex justify-center">
        <p className="text-gray-700">Result : {filteredUserData?.length}</p>
      </div>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 auto-cols-fr justify-items-center gap-x-4 gap-y-8 px-4 lg:px-16">
        {filteredUserData
          ? filteredUserData.map((user) => {
              return (
                <Card key={user?.id} className="w-full max-w-[500px] h-[400px]">
                  <CardMedia
                    component="img"
                    image={user?.image}
                    alt={`img : ${user?.first_name} ${user?.last_name}`}
                    className="w-full h-[60%]"
                  />
                  <CardContent className="h-[40%] flex flex-col justify-center items-center">
                    <Typography variant="body1" color="text.secondary">
                      {`${user?.first_name} ${user?.last_name}`}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="!font-bold"
                      color="text.secondary"
                    >
                      {user?.gender}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="!font-bold"
                      color="text.secondary"
                    >
                      {user?.email}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="!font-bold"
                      color="text.secondary"
                    >
                      {user?.country}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })
          : null}
      </div>
    </>
  );
}

export default Cards;
