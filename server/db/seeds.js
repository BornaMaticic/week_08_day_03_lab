use bucket_list;
db.dropDatabase();

db.locations.insertMany([

    {
      name: "New York",
      activity: "Visit Statue of Liberty",
      date: "2020-03-13"
    },
    {
      name: "Tokyo",
      activity: "Rugby World Cup",
      date: "2019-06-09"
    },
    {
      name: "Amsterdam",
      activity: "Red Light District",
      date: "2018-02-15"
    }

]);
