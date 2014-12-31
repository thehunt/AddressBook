// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
  AV._initialize("tekdkklqguiw626ai8d7xu5j7fu6fl2q628x7wlucys1rklm", "ro9uqow59iojuamtmsaooq9tvw4q9hc18ylwwrfwhwy7sk2f", "g1npeuzzre4eosychmkoq97o8sl0hcwevx1ofyhk9113fqal");
  AV.Cloud.useMasterKey();
});
