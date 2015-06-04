var datatree = {
    "tree": "acs0913",
    "data": [
      
        { "varcode": "mhi", "verbose": "Median Household Income", "section": "Income", "table": "b19013", "numerator": "fp.b19013001",  "denominator": "1",  "type": "currency",  "minval": "1", "mininc": "1",  "usezeroasnull": "yes", "favtable":"Median Household Income", "favstyle":"jenks,7,mh1", "bg":"yes"},
      
        { "varcode": "mhv", "verbose": "Median Home Value", "section": "Housing", "table": "b25077", "numerator": "fp.b25077001",  "denominator": "1",  "type": "currency",  "minval": "1", "mininc": "1",  "usezeroasnull": "yes", "favtable":"Median Home Value", "favstyle":"jenks,7,mh2", "bg":"yes"},   
      
        { "varcode": "mfi", "verbose": "Median Family Income", "section": "Income", "table": "b19113", "numerator": "fp.b19113001",  "denominator": "1",  "type": "currency",  "minval": "1", "mininc": "1",  "usezeroasnull": "yes", "favtable":"Median Family Income", "favstyle":"jenks,7,mh3", "bg":"yes"},
      
      { "varcode": "pci", "verbose": "Per Capita Income", "section": "Income", "table": "b19301", "numerator": "fp.b19301001",  "denominator": "1",  "type": "currency",  "minval": "1", "mininc": "1",  "usezeroasnull": "yes", "favtable":"Per Capita Income", "favstyle":"jenks,7,mh4", "bg":"yes"},
      
      { "varcode": "myb", "verbose": "Median Year Housing Unit Built", "section": "Housing", "table": "b25035", "numerator": "fp.b25035001",  "denominator": "1",  "type": "regular",  "minval": "1939", "mininc": "1",  "usezeroasnull": "yes", "favtable":"Median Year Built", "favstyle":"jenks,7,mh5", "bg":"yes"},
      
    { "varcode": "pop", "verbose": "Total Population", "section": "Population", "table": "b01001", "numerator": "fp.b01001001",  "denominator": "1",  "type": "number",  "minval": "0", "mininc": "1",  "usezeroasnull": "no", "favtable":"Basic Population (total)", "favstyle":"jenks,7,mh7", "bg":"yes"},      
      
    { "varcode": "pcth", "verbose": "Percent Hispanic", "section": "Race", "table": "b03002", "numerator": "fp.b03002012",  "denominator": "fp.b03002001",  "type": "percent",  "minval": "0", "mininc": ".01",  "usezeroasnull": "no", "favtable":"Race-Ethnicity (percent)", "favstyle":"jenks,7,mh6", "bg":"yes"},
            
  { "varcode": "pctw", "verbose": "Percent White", "section": "Race", "table": "b03002", "numerator": "fp.b03002003",  "denominator": "fp.b03002001",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Race-Ethnicity (percent)", "favstyle":"jenks,7,mh8", "bg":"yes"},
      
      { "varcode": "pctb", "verbose": "Percent Black", "section": "Race", "table": "b03002", "numerator": "fp.b03002004",  "denominator": "fp.b03002001",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Race-Ethnicity (percent)", "favstyle":"jenks,7,mh9", "bg":"yes"},
      
      { "varcode": "pctna", "verbose": "Percent Native American", "section": "Race", "table": "b03002", "numerator": "fp.b03002005",  "denominator": "fp.b03002001",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Race-Ethnicity (percent)", "favstyle":"jenks,7,sh1", "bg":"yes"},
      
{ "varcode": "pctasian", "verbose": "Percent Asian", "section": "Race", "table": "b03002", "numerator": "fp.b03002006",  "denominator": "fp.b03002001",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Race-Ethnicity (percent)", "favstyle":"jenks,7,sh2", "bg":"yes"},
      
      { "varcode": "pcthaw", "verbose": "Percent Hawaiian & PacIs", "section": "Race", "table": "b03002", "numerator": "fp.b03002007",  "denominator": "fp.b03002001",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Race-Ethnicity (percent)", "favstyle":"jenks,7,sh4", "bg":"yes"},
      
      { "varcode": "pctmale", "verbose": "Percent Male", "section": "Population", "table": "b01001", "numerator": "fp.b01001002",  "denominator": "fp.b01001001",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Male & Female (percent)", "favstyle":"jenks,7,sh6", "bg":"yes"},
      
      { "varcode": "pctfemale", "verbose": "Percent Female", "section": "Population", "table": "b01001", "numerator": "fp.b01001026",  "denominator": "fp.b01001001",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Male & Female (percent)", "favstyle":"jenks,7,sh5", "bg":"yes"},
      
      { "varcode": "ageless10", "verbose": "Percent Age Less Than 10", "section": "Age", "table": "b01001", "numerator": "Number(fp.b01001003)+Number(fp.b01001004)+Number(fp.b01001027)+Number(fp.b01001028)",  "denominator": "Number(fp.b01001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Age Group (percent)", "favstyle":"jenks,7,mh1", "bg":"yes"},
      
      { "varcode": "ageless18", "verbose": "Percent Age Less Than 18", "section": "Age", "table": "b01001", "numerator": "Number(fp.b01001003)+Number(fp.b01001004)+Number(fp.b01001027)+Number(fp.b01001028)+Number(fp.b01001005)+Number(fp.b01001006)+Number(fp.b01001029)+Number(fp.b01001030)",  "denominator": "Number(fp.b01001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Age Group (percent)", "favstyle":"jenks,7,mh2", "bg":"yes"},
      
      { "varcode": "age18to24", "verbose": "Percent Age 18 to 24", "section": "Age", "table": "b01001", "numerator": "Number(fp.b01001007)+Number(fp.b01001008)+Number(fp.b01001009)+Number(fp.b01001010)+Number(fp.b01001031)+Number(fp.b01001032)+Number(fp.b01001033)+Number(fp.b01001034)",  "denominator": "Number(fp.b01001001)", "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Age Group (percent)", "favstyle":"jenks,7,mh3", "bg":"yes"},
      
      { "varcode": "age25to34", "verbose": "Percent Age 25 to 34", "section": "Age", "table": "b01001", "numerator": "Number(fp.b01001011)+Number(fp.b01001012)+Number(fp.b01001035)+Number(fp.b01001036)",  "denominator": "Number(fp.b01001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Age Group (percent)", "favstyle":"jenks,7,mh4", "bg":"yes"},
      
      { "varcode": "age35to44", "verbose": "Percent Age 35 to 44", "section": "Age", "table": "b01001", "numerator": "Number(fp.b01001013)+Number(fp.b01001014)+Number(fp.b01001037)+Number(fp.b01001038)",  "denominator": "Number(fp.b01001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Age Group (percent)", "favstyle":"jenks,7,mh5", "bg":"yes"},
      
      { "varcode": "age45to64", "verbose": "Percent Age 45 to 64", "section": "Age", "table": "b01001", "numerator": "Number(fp.b01001015)+Number(fp.b01001016)+Number(fp.b01001017)+Number(fp.b01001018)+Number(fp.b01001019)+Number(fp.b01001039)+Number(fp.b01001040)+Number(fp.b01001041)+Number(fp.b01001042)+Number(fp.b01001043)",  "denominator": "Number(fp.b01001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Age Group (percent)", "favstyle":"jenks,7,mh6", "bg":"yes"},
      
      { "varcode": "age65plus", "verbose": "Percent Age 65 Plus", "section": "Age", "table": "b01001", "numerator": "Number(fp.b01001020)+Number(fp.b01001021)+Number(fp.b01001022)+Number(fp.b01001023)+Number(fp.b01001024)+Number(fp.b01001025)+Number(fp.b01001044)+Number(fp.b01001045)+Number(fp.b01001046)+Number(fp.b01001047)+Number(fp.b01001048)+Number(fp.b01001049)",  "denominator": "Number(fp.b01001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Age Group (percent)", "favstyle":"jenks,7,mh7", "bg":"yes"},
      
      { "varcode": "medianage", "verbose": "Median Age", "section": "Age", "table": "b01002", "numerator": "Number(fp.b01002001)",  "denominator": "1",  "type": "number",  "minval": "1", "mininc": "0.1",  "usezeroasnull": "yes", "favtable":"Median Age", "favstyle":"jenks,7,mh8", "bg":"yes"},
      
      { "varcode": "households", "verbose": "Total Households", "section": "Housing", "table": "b11001", "numerator": "Number(fp.b11001001)",  "denominator": "1",  "type": "number",  "minval": "0", "mininc": "1",  "usezeroasnull": "no", "favtable":"Household Type (total)", "favstyle":"jenks,7,mh9", "bg":"yes"},
      
      { "varcode": "familyhh", "verbose": "Percent Family Households", "section": "Housing", "table": "b11001", "numerator": "Number(fp.b11001002)",  "denominator": "Number(fp.b11001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Household Type (total)", "favstyle":"jenks,7,mh10", "bg":"yes"},
      
      { "varcode": "nonfamhh", "verbose": "Percent Non Family Households", "section": "Housing", "table": "b11001", "numerator": "Number(fp.b11001007)",  "denominator": "Number(fp.b11001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Household Type (total)", "favstyle":"jenks,7,mh11", "bg":"yes"},
      
      { "varcode": "housingun", "verbose": "Total Housing Units", "section": "Housing", "table": "b25002", "numerator": "Number(fp.b25002001)",  "denominator": "1",  "type": "number",  "minval": "0", "mininc": "1",  "usezeroasnull": "no", "favtable":"Housing Units (total)", "favstyle":"jenks,7,mh12", "bg":"yes"},
      
      { "varcode": "occhu", "verbose": "Percent Occupied Housing Units", "section": "Housing", "table": "b25002", "numerator": "Number(fp.b25002002)",  "denominator": "Number(fp.b25002001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Occupancy (percent)", "favstyle":"jenks,7,sh1", "bg":"yes"},
      
      { "varcode": "vachu", "verbose": "Percent Vacant Housing Units", "section": "Housing", "table": "b25002", "numerator": "Number(fp.b25002003)",  "denominator": "Number(fp.b25002001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Occupancy (percent)", "favstyle":"jenks,7,sh2", "bg":"yes"},
      
      { "varcode": "owned", "verbose": "Percent Owner Occupied Housing Units", "section": "Housing", "table": "b25003", "numerator": "Number(fp.b25003002)",  "denominator": "Number(fp.b25003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Tenure (percent)", "favstyle":"jenks,7,sh4", "bg":"yes"},
      
      { "varcode": "rented", "verbose": "Percent Renter Occupied Housing Units", "section": "Housing", "table": "b25003", "numerator": "Number(fp.b25003003)",  "denominator": "Number(fp.b25003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Tenure (percent)", "favstyle":"jenks,7,sh5", "bg":"yes"},
      
      { "varcode": "nohsdipl", "verbose": "Percent No High School Diploma", "section": "Education", "table": "b15003", "numerator": "Number(fp.b15003002)+Number(fp.b15003003)+Number(fp.b15003004)+Number(fp.b15003005)+Number(fp.b15003006)+Number(fp.b15003007)+Number(fp.b15003008)+Number(fp.b15003009)+Number(fp.b15003010)+Number(fp.b15003011)+Number(fp.b15003012)+Number(fp.b15003013)+Number(fp.b15003014)+Number(fp.b15003015)+Number(fp.b15003016)",  "denominator": "Number(fp.b15003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Educational Attainment (percent)", "favstyle":"jenks,7,sh6", "bg":"yes"},
      
      { "varcode": "hsgradsc", "verbose": "Percent High School Degree or Some College", "section": "Education", "table": "b15003", "numerator": "Number(fp.b15003017)+Number(fp.b15003018)+Number(fp.b15003019)+Number(fp.b15003020)+Number(fp.b15003021)",  "denominator": "Number(fp.b15003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Educational Attainment (percent)", "favstyle":"jenks,7,mh1", "bg":"yes"},
      
      { "varcode": "bachlhghr", "verbose": "Percent Bachelors Degree or Higher", "section": "Education", "table": "b15003", "numerator": "Number(fp.b15003022)+Number(fp.b15003023)+Number(fp.b15003024)+Number(fp.b15003025)",  "denominator": "Number(fp.b15003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Educational Attainment (percent)", "favstyle":"jenks,7,mh2", "bg":"yes"},
      
      { "varcode": "medcrent", "verbose": "Median Contract Rent", "section": "Rent", "table": "b25058", "numerator": "Number(fp.b25058001)",  "denominator": "1",  "type": "currency",  "minval": "1", "mininc": "1",  "usezeroasnull": "yes", "favtable":"Median Contract Rent", "favstyle":"jenks,7,mh3", "bg":"yes"},
      
      { "varcode": "medgrent", "verbose": "Median Gross Rent", "section": "Rent", "table": "b25064", "numerator": "Number(fp.b25064001)",  "denominator": "1",  "type": "currency",  "minval": "1", "mininc": "1",  "usezeroasnull": "yes", "favtable":"Median Gross Rent", "favstyle":"jenks,7,mh4", "bg":"yes"},
      
      { "varcode": "citzbirth", "verbose": "Percent US Citizen by Birth", "section": "Citizenship", "table": "b05001", "numerator": "Number(fp.b05001002)+Number(fp.b05001003)+Number(fp.b05001004)",  "denominator": "Number(fp.b05001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Citizenship (percent)", "favstyle":"jenks,7,mh5", "bg":"no"},
      
      { "varcode": "citznat", "verbose": "Percent US Citizen by Naturalization", "section": "Citizenship", "table": "b05001", "numerator": "Number(fp.b05001005)",  "denominator": "Number(fp.b05001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Citizenship (percent)", "favstyle":"jenks,7,mh6", "bg":"no"},
      
      { "varcode": "notcitz", "verbose": "Percent Not a US Citizen", "section": "Citizenship", "table": "b05001", "numerator": "Number(fp.b05001006)",  "denominator": "Number(fp.b05001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Citizenship (percent)", "favstyle":"jenks,7,mh7", "bg":"no"},
      
      { "varcode": "borninsor", "verbose": "Percent US Native, Born in State of Residence", "section": "Birthplace", "table": "b05002", "numerator": "Number(fp.b05002003)",  "denominator": "Number(fp.b05002001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Birthplace (percent)", "favstyle":"jenks,7,mh8", "bg":"no"},
      
      { "varcode": "bornothst", "verbose": "Percent US Native, Born in Another State", "section": "Birthplace", "table": "b05002", "numerator": "Number(fp.b05002004)",  "denominator": "Number(fp.b05002001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Birthplace (percent)", "favstyle":"jenks,7,mh9", "bg":"no"},
      
      { "varcode": "nativeb", "verbose": "Percent US Native", "section": "Birthplace", "table": "b05002", "numerator": "Number(fp.b05002002)",  "denominator": "Number(fp.b05002001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Birthplace (percent)", "favstyle":"jenks,7,mh10", "bg":"no"},
      
      { "varcode": "foreignb", "verbose": "Percent Foreign Born", "section": "Birthplace", "table": "b05002", "numerator": "Number(fp.b05002013)",  "denominator": "Number(fp.b05002001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Birthplace (percent)", "favstyle":"jenks,7,mh11", "bg":"no"},
      
      { "varcode": "samehouse", "verbose": "Percent Did Not Move", "section": "Migration", "table": "b07003", "numerator": "Number(fp.b07003004)",  "denominator": "Number(fp.b07003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Migration (percent)", "favstyle":"jenks,7,mh12", "bg":"no"},
      
      { "varcode": "samecnty", "verbose": "Percent Moved Within County", "section": "Migration", "table": "b07003", "numerator": "Number(fp.b07003007)",  "denominator": "Number(fp.b07003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Migration (percent)", "favstyle":"jenks,7,sh1", "bg":"no"},
      
      { "varcode": "samestate", "verbose": "Percent Moved from Different County Within State", "section": "Migration", "table": "b07003", "numerator": "Number(fp.b07003010)",  "denominator": "Number(fp.b07003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Migration (percent)", "favstyle":"jenks,7,sh2", "bg":"no"},
      
       { "varcode": "diffstate", "verbose": "Percent Moved from Different State", "section": "Migration", "table": "b07003", "numerator": "Number(fp.b07003013)",  "denominator": "Number(fp.b07003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Migration (percent)", "favstyle":"jenks,7,sh4", "bg":"no"},
       
       { "varcode": "frmabroad", "verbose": "Percent Moved From Abroad", "section": "Migration", "table": "b07003", "numerator": "Number(fp.b07003016)",  "denominator": "Number(fp.b07003001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Migration (percent)", "favstyle":"jenks,7,sh5", "bg":"no"},
       
       { "varcode": "carall", "verbose": "Percent Drove a Car Truck or Van to Work", "section": "Transportation", "table": "b08006", "numerator": "Number(fp.b08006002)",  "denominator": "Number(fp.b08006001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Transportation to Work (percent)", "favstyle":"jenks,7,sh6", "bg":"no"},
       
       { "varcode": "usedpt", "verbose": "Percent Used Public Transportation", "section": "Transportation", "table": "b08006", "numerator": "Number(fp.b08006008)",  "denominator": "Number(fp.b08006001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Transportation to Work (percent)", "favstyle":"jenks,7,mh1", "bg":"no"},
       
       { "varcode": "bike", "verbose": "Percent Biked to Work", "section": "Transportation", "table": "b08006", "numerator": "Number(fp.b08006014)",  "denominator": "Number(fp.b08006001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Transportation to Work (percent)", "favstyle":"jenks,7,mh2", "bg":"no"},
       
       { "varcode": "walked", "verbose": "Percent Walked to Work", "section": "Transportation", "table": "b08006", "numerator": "Number(fp.b08006015)",  "denominator": "Number(fp.b08006001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Transportation to Work (percent)", "favstyle":"jenks,7,mh3", "bg":"no"},
       
       { "varcode": "home", "verbose": "Percent Worked at Home", "section": "Transportation", "table": "b08006", "numerator": "Number(fp.b08006017)",  "denominator": "Number(fp.b08006001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Transportation to Work (percent)", "favstyle":"jenks,7,mh4", "bg":"no"},
       
       { "varcode": "avghhsize", "verbose": "Average Household Size", "section": "Housing", "table": "b25010", "numerator": "Number(fp.b25010001)",  "denominator": "1",  "type": "number",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "yes", "favtable":"Average Household Size", "favstyle":"jenks,7,mh5", "bg":"yes"},
       
       { "varcode": "hhldralone", "verbose": "Percent Householder Living Alone", "section": "Housing", "table": "b11001", "numerator": "Number(fp.b11001008)",  "denominator": "Number(fp.b11001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Household Type (percent)", "favstyle":"jenks,7,mh6", "bg":"yes"},
       
       { "varcode": "insured", "verbose": "Percent Insured", "section": "Insurance", "table": "b27001", "numerator": "Number(fp.b27001004)+Number(fp.b27001007)+Number(fp.b27001010)+Number(fp.b27001013)+Number(fp.b27001016)+Number(fp.b27001019)+Number(fp.b27001022)+Number(fp.b27001025)+Number(fp.b27001028)+Number(fp.b27001032)+Number(fp.b27001035)+Number(fp.b27001038)+Number(fp.b27001041)+Number(fp.b27001044)+Number(fp.b27001047)+Number(fp.b27001050)+Number(fp.b27001053)+Number(fp.b27001056)",  "denominator": "Number(fp.b27001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Insurance (percent)", "favstyle":"jenks,7,mh7", "bg":"no"},
       
       { "varcode": "uninsured", "verbose": "Percent No Insurance", "section": "Insurance", "table": "b27001", "numerator": "Number(fp.b27001005)+Number(fp.b27001008)+Number(fp.b27001011)+Number(fp.b27001014)+Number(fp.b27001017)+Number(fp.b27001020)+Number(fp.b27001023)+Number(fp.b27001026)+Number(fp.b27001029)+Number(fp.b27001033)+Number(fp.b27001036)+Number(fp.b27001039)+Number(fp.b27001042)+Number(fp.b27001045)+Number(fp.b27001048)+Number(fp.b27001051)+Number(fp.b27001054)+Number(fp.b27001057)",  "denominator": "Number(fp.b27001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Insurance (percent)", "favstyle":"jenks,7,mh8", "bg":"no"},
       
       { "varcode": "enrolled", "verbose": "Percent Enrolled in School", "section": "Education", "table": "b14001", "numerator": "Number(fp.b14001002)",  "denominator": "Number(fp.b14001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Enrolled in School (percent)", "favstyle":"jenks,7,mh9", "bg":"no"},
       
       { "varcode": "k8", "verbose": "Percent of Enrolled in K-8", "section": "Education", "table": "b14001", "numerator": "Number(fp.b14001004)+Number(fp.b14001005)+Number(fp.b14001006)",  "denominator": "Number(fp.b14001002)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Enrolled in School (percent)", "favstyle":"jenks,7,mh10", "bg":"no"},
       
       { "varcode": "enrhs", "verbose": "Percent of Enrolled in 9-12", "section": "Education", "table": "b14001", "numerator": "Number(fp.b14001007)",  "denominator": "Number(fp.b14001002)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Enrolled in School (percent)", "favstyle":"jenks,7,mh11", "bg":"no"},
       
       { "varcode": "enrcollege", "verbose": "Percent of Enrolled in Colleges", "section": "Education", "table": "b14001", "numerator": "Number(fp.b14001008)+Number(fp.b14001009)",  "denominator": "Number(fp.b14001002)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Enrolled in School (percent)", "favstyle":"jenks,7,mh12", "bg":"no"},
       
       { "varcode": "notenrolled", "verbose": "Percent Not Enrolled in School", "section": "Education", "table": "b14001", "numerator": "Number(fp.b14001010)",  "denominator": "Number(fp.b14001001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Enrolled in School (percent)", "favstyle":"jenks,7,sh1", "bg":"no"},
       
       { "varcode": "inpoverty", "verbose": "Percent in Poverty", "section": "Poverty", "table": "c17002", "numerator": "Number(fp.c17002002)+Number(fp.c17002003)",  "denominator": "Number(fp.c17002001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Poverty (percent)", "favstyle":"jenks,7,sh2", "bg":"yes"},
       
       { "varcode": "inpov150", "verbose": "Percent Below 150% Poverty", "section": "Poverty", "table": "c17002", "numerator": "Number(fp.c17002002)+Number(fp.c17002003)+Number(fp.c17002004)+Number(fp.c17002005)",  "denominator": "Number(fp.c17002001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Poverty (percent)", "favstyle":"jenks,7,sh4", "bg":"yes"},
       
       { "varcode": "disabled", "verbose": "Percent Disabled", "section": "Disability", "table": "b18101", "numerator": "Number(fp.b18101004)+Number(fp.b18101007)+Number(fp.b18101010)+Number(fp.b18101013)+Number(fp.b18101016)+Number(fp.b18101019)+Number(fp.b18101023)+Number(fp.b18101026)+Number(fp.b18101029)+Number(fp.b18101032)+Number(fp.b18101035)+Number(fp.b18101038)",  "denominator": "Number(fp.b18101001)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Disability (percent)", "favstyle":"jenks,7,sh5", "bg":"no"},
       
       { "varcode": "unemp", "verbose": "Percent Unemployed", "section": "Employment", "table": "b23025", "numerator": "Number(fp.b23025005)",  "denominator": "Number(fp.b23025002)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Unemployment (percent)", "favstyle":"jenks,7,sh6", "bg":"yes"},
       
      { "varcode": "armedforces", "verbose": "Percent of Labor Force in Armed Forces", "section": "Employment", "table": "b23025", "numerator": "Number(fp.b23025006)",  "denominator": "Number(fp.b23025002)",  "type": "percent",  "minval": "0", "mininc": "0.01",  "usezeroasnull": "no", "favtable":"Unemployment (percent)", "favstyle":"jenks,7,mh1", "bg":"yes"},
      
      { "varcode": "realtaxes", "verbose": "Median Real Estate Taxes Paid", "section": "Housing", "table": "b25103", "numerator": "Number(fp.b25103001)",  "denominator": "1",  "type": "currency",  "minval": "1", "mininc": "1",  "usezeroasnull": "yes", "favtable":"", "favstyle":"jenks,7,mh1", "bg":"no"},
      
      { "varcode": "moc_wmc", "verbose": "Median Monthly Owner Costs (w Mortgage)", "section": "Housing", "table": "b25088", "numerator": "Number(fp.b25088002)",  "denominator": "1",  "type": "currency",  "minval": "1", "mininc": "1",  "usezeroasnull": "yes", "favtable":"", "favstyle":"jenks,7,mh1", "bg":"yes"},
      
      { "varcode": "moc_nmc", "verbose": "Median Monthly Owner Costs (no Mortgage)", "section": "Housing", "table": "b25088", "numerator": "Number(fp.b25088003)",  "denominator": "1",  "type": "currency",  "minval": "1", "mininc": "1",  "usezeroasnull": "yes", "favtable":"", "favstyle":"jenks,7,mh1", "bg":"yes"}

       

      
      
    ]
};