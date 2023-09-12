import React from "react";
import Card from "../../Card";

const Education = () => {
  return (
    <div className="Edu-Cards">
      <h1 className="heading">EDUCATION</h1>
      <div className="Education-div">
        <Card
          colg="St. Thomas Academy, Saharanpur"
          degree="Secondary School Examination"
          pass="(2013-2015)"
          cgpa="6.8"
        />
        <Card
          colg="St. Thomas Academy, Saharanpur"
          degree="Senior School Certificate Examination"
          pass="(2017)"
          cgpa="6"
        />
        <Card
          colg="Dharam Singh Jagdish Singh Mahavidhyalya, Fatehpur Kallan"
          degree="Bachelor Of Science"
          pass="(2017-2020)"
          cgpa="6.42"
        />
        <Card
          colg="Shri Guru Ram Rai University, Dehradun"
          degree="Master Of Science"
          pass="(2020-2022)"
          cgpa="8.27"
        />
      </div>
    </div>
  );
};
export default Education;
