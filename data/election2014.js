// ref: http://www.census2011.co.in/states.php
// Census data of year 2011
//Electorate data - https://web.archive.org/web/20140525214134/http://eci.nic.in/eci_main1/GE2014/PC_WISE_TURNOUT.htm
//Votes - http://www.indiavotes.com/

var stateCensus = {

	"UP": {

		"name": "Uttar Pradesh",
		"capital": {
			"name": "Lucknow",
			"details": [ 
				{
					"name": "Lucknow",
					"coordinates": [ 26.846511, 80.946683 ],
					"population": "2,901,474",
					"sexratio": 915,
					"literacy": 84.72
				} 
			] 
		},
        "pc_results":{"PC_2009":{"Agra":"NDA",
"Akbarpur":"UPA",
"Aligarh":"NDA",
"Allahabad":"Others",
"Ambedkar Nagar":"NDA",
"Amethi":"UPA",
"Amroha":"NDA",
"Aonla":"NDA",
"Azamgarh":"NDA",
"Badaun":"Others",
"Baghpat":"NDA",
"Bahraich":"UPA",
"Ballia":"Others",
"Banda":"Others",
"Bansgaon":"NDA",
"Barabanki":"UPA",
"Bareilly":"UPA",
"Basti":"NDA",
"Bhadohi":"NDA",
"Bijnor":"NDA",
"Bulandshahr":"Others",
"Chandauli":"Others",
"Deoria":"NDA",
"Dhaurahra":"UPA",
"Domariyaganj":"UPA",
"Etah":"UPA",
"Etawah":"Others",
"Faizabad":"UPA",
"Farrukhabad":"UPA",
"Fatehpur":"Others",
"Fatehpur Sikri":"NDA",
"Firozabad":"Others",
"Gautam Buddh Nagar":"NDA",
"Ghaziabad":"NDA",
"Ghazipur":"Others",
"Ghosi":"NDA",
"Gonda":"UPA",
"Gorakhpur":"NDA",
"Hamirpur":"NDA",
"Hardoi":"Others",
"Hathras":"NDA",
"Jalaun":"Others",
"Jaunpur":"NDA",
"Jhansi":"UPA",
"Kairana":"NDA",
"Kaiserganj":"Others",
"Kannauj":"Others",
"Kanpur":"UPA",
"Kaushambi":"Others",
"Kheri":"UPA",
"Kushi Nagar":"UPA",
"Lalganj":"NDA",
"Lucknow":"NDA",
"Machhlishahr":"Others",
"Maharajganj":"UPA",
"Mainpuri":"Others",
"Mathura":"NDA",
"Meerut":"NDA",
"Mirzapur":"Others",
"Misrikh":"NDA",
"Mohanlalganj":"Others",
"Moradabad":"UPA",
"Muzaffarnagar":"NDA",
"Nagina":"Others",
"Phulpur":"NDA",
"Pilibhit":"NDA",
"Pratapgarh":"UPA",
"Rae Bareli":"UPA",
"Rampur":"Others",
"Robertsganj":"Others",
"Saharanpur":"NDA",
"Salempur":"NDA",
"Sambhal":"NDA",
"Sant Kabir Nagar":"NDA",
"Shahjahanpur":"Others",
"Shrawasti":"UPA",
"Sitapur":"NDA",
"Sultanpur":"UPA",
"Unnao":"UPA",
"Varanasi":"NDA"},"PC_2014":{"Agra":"NDA",
"Akbarpur":"NDA",
"Aligarh":"NDA",
"Allahabad":"NDA",
"Ambedkar Nagar":"NDA",
"Amethi":"UPA",
"Amroha":"NDA",
"Aonla":"NDA",
"Azamgarh":"NDA",
"Budaun":"NDA",
"Baghpat":"NDA",
"Bahraich":"NDA",
"Ballia":"NDA",
"Banda":"NDA",
"Bansgaon":"NDA",
"Barabanki":"NDA",
"Bareilly":"NDA",
"Basti":"NDA",
"Bhadohi":"NDA",
"Bijnor":"NDA",
"Bulandshahr":"NDA",
"Chandauli":"NDA",
"Deoria":"NDA",
"Dhaurahra":"NDA",
"Domriaganj":"NDA",
"Etah":"NDA",
"Etawah":"NDA",
"Faizabad":"NDA",
"Farrukhabad":"NDA",
"Fatehpur":"NDA",
"Fatehpur Sikri":"NDA",
"Firozabad":"NDA",
"Gautam Buddha Nagar":"NDA",
"Ghaziabad":"NDA",
"Ghazipur":"NDA",
"Ghosi":"NDA",
"Gonda":"NDA",
"Gorakhpur":"NDA",
"Hamirpur":"NDA",
"Hardoi":"NDA",
"Hathras":"NDA",
"Jalaun":"NDA",
"Jaunpur":"NDA",
"Jhansi":"NDA",
"Kairana":"NDA",
"Kaisarganj":"NDA",
"Kannauj":"NDA",
"Kanpur":"NDA",
"Kaushambi":"NDA",
"Kheri":"NDA",
"Kushi Nagar":"NDA",
"Lalganj":"NDA",
"Lucknow":"NDA",
"Machhlishahr":"NDA",
"Maharajganj":"NDA",
"Mainpuri":"NDA",
"Mathura":"NDA",
"Meerut":"NDA",
"Mirzapur":"NDA",
"Misrikh":"NDA",
"Mohanlalganj":"NDA",
"Moradabad":"NDA",
"Muzaffarnagar":"NDA",
"Nagina":"NDA",
"Phulpur":"NDA",
"Pilibhit":"NDA",
"Pratapgarh":"NDA",
"Rae Bareli":"UPA",
"Rampur":"NDA",
"Robertsganj":"NDA",
"Saharanpur":"NDA",
"Salempur":"NDA",
"Sambhal":"NDA",
"Sant Kabir Nagar":"NDA",
"Shahjahanpur":"NDA",
"Shrawasti":"NDA",
"Sitapur":"NDA",
"Sultanpur":"NDA",
"Unnao":"NDA",
"Varanasi":"NDA"}},
		"population": "199,812,341",
		"growth": 20.23,
		"area": 240928,
		"density": 829,
		"sexratio": 912,
		"literacy": 67.68,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":35,"UPA":22,"Others":23},"PC_2014":{"winning_party":"NDA","NDA":78,"UPA":2,"Others":0}},
        "TurnOut":[47.55,58.35],
		"maleTurnout": 59.13,
		"femaleTurnout": 57.42, 
		"totalTurnout": 58.35


	},

	"MH": {

		"name": "Maharashtra",
		"capital": {
			"name": "Mumbai",
			"details": [
				{
					"name": "Mumbai",
					"coordinates": [ 19.075984, 72.877656 ],
					"population": "18,414,288",
					"sexratio": 852,
					"literacy": 90.28
				}
			]
		},
		"population": "112,374,333",
		"growth": 15.99,
		"area": 307713,
		"density": 365,
		"sexratio": 929,
		"literacy": 82.34,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":22,"UPA":18,"Others":8},"PC_2014":{"winning_party":"NDA","NDA":42,"UPA":6,"Others":0}},
		"TurnOut":[50.54,60.36],
        "maleTurnout": 62.5,
		"femaleTurnout": 57.95, 
		"totalTurnout": 61.6

	},

	"BR": {

		"name": "Bihar",
		"capital": {
			"name": "Patna",
			"details": [
				{
					"name": "Patna",
					"coordinates": [ 25.611000, 85.144000 ],
					"population": "2,046,652",
					"sexratio": 882,
					"literacy": 84.71
				}
			]
		},
		"population": "104,099,452",
		"growth": 25.42,
		"area": 94163,
		"density": 1106,
		"sexratio": 918,
		"literacy": 61.80,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":36,"UPA":4,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":31,"UPA":9,"Others":0}},
		"TurnOut":[44.46,56.28],
        "maleTurnout": 55.08,
		"femaleTurnout": 57.66, 
		"totalTurnout": 56.28
	},

	"WB": {

		"name": "West Bengal",
		"capital": {
			"name": "Kolkata",
			"details": [
				{
					"name": "Kolkata",
					"coordinates": [ 22.572646, 88.363895 ],
					"population": "14,112,536",
					"sexratio": 899,
					"literacy": 87.14
				}
			]
		},
		"population": "91,276,115",
		"growth": 13.84,
		"area": 88752,
		"density": 1028,
		"sexratio": 950,
		"literacy": 76.26,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":1,"UPA":26,"Others":15},"PC_2014":{"winning_party":"NDA","NDA":36,"UPA":6,"Others":0}},
		"TurnOut":[81.47,82.16],
        "maleTurnout": 82.25,
		"femaleTurnout": 82.06, 
		"totalTurnout": 82.16

	},

	"AP": {

		"name": "Andhra Pradesh",
		"capital": {
			"name": "Hyderabad",
			"details": [
				{
					"name": "Hyderabad",
					"coordinates": [ 17.385044, 78.486671 ],
					"population": "7,749,334",
					"sexratio": 945,
					"literacy": 82.96
				}
			]
		},
		"population": "84,580,777",
		"growth": 10.98,
		"area": 275045,
		"density": 308,
		"sexratio": 993,
		"literacy": 67.02,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":33,"Others":9},"PC_2014":{"winning_party":"NDA","NDA":25,"UPA":0,"Others":0}},
		"TurnOut":[72.82,78.68],
        "maleTurnout": 74.54,
		"femaleTurnout": 74.39, 
		"totalTurnout": 74.47

	},

	"MP": {

		"name": "Madhya Pradesh",
		"capital": {
			"name": "Bhopal",
			"details": [
				{
					"name": "Bhopal",
					"coordinates": [ 23.259933, 77.412615 ],
					"population": "1,883,381",
					"sexratio": 911,
					"literacy": 85.24
				}
			]
		},
		"population": "72,626,809",
		"growth": 20.35,
		"area": 308252,
		"density": 236,
		"sexratio": 931,
		"literacy": 69.32,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":17,"UPA":12,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":27,"UPA":2,"Others":0}},
		"TurnOut":[51.19,61.6],
        "maleTurnout": 66.12,
		"femaleTurnout": 56.58, 
		"totalTurnout": 61.6

	},

	"TN": {

		"name": "Tamil Nadu",
		"capital": {
			"name": "Chennai",
			"details": [
				{
					"name": "Chennai",
					"coordinates": [ 13.082680, 80.270718 ],
					"population": "8,696,010",
					"sexratio": 986,
					"literacy": 90.33
				}
			]
		},
		"population": "72,147,030",
		"growth": 15.61,
		"area": 130060,
		"density": 555,
		"sexratio": 996,
		"literacy": 80.09,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":27,"Others":12},"PC_2014":{"winning_party":"Others","NDA":2,"UPA":0,"Others":37}},
		"TurnOut":[73.1,73.7],
        "maleTurnout": 73.44,
		"femaleTurnout": 73.96, 
		"totalTurnout": 73.70

	},

	"RJ": {

		"name": "Rajasthan",
		"capital": {
			"name": "Jaipur",
			"details": [
				{
					"name": "Jaipur",
					"coordinates": [ 26.912434, 75.787271 ],
					"population": "3,073,350",
					"sexratio": 898,
					"literacy": 84.34
				}
			]
		},
		"population": "68,548,437",
		"growth": 21.31,
		"area": 342239,
		"density": 200,
		"sexratio": 928,
		"literacy": 66.11,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":4,"UPA":21,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":25,"UPA":0,"Others":0}},
		"TurnOut":[48.42,63.09],
        "maleTurnout": 64.62,
		"femaleTurnout": 61.39, 
		"totalTurnout": 63.09

	},

	"KA": {

		"name": "Karnataka",
		"capital": {
			"name": "Bengaluru",
			"details": [
				{
					"name": "Bengaluru",
					"coordinates": [ 12.971599, 77.594563 ],
					"population": "8,499,399",
					"sexratio": 914,
					"literacy": 89.59
				}
			]
		},
		"population": "61,095,297",
		"growth": 15.60,
		"area": 191791,
		"density": 319,
		"sexratio": 973,
		"literacy": 75.36,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":19,"UPA":6,"Others":3},"PC_2014":{"winning_party":"NDA","NDA":17,"UPA":11,"Others":0}},
		"TurnOut":[58.81,67.17],
        "maleTurnout": 68.54,
		"femaleTurnout": 65.73, 
		"totalTurnout": 67.17

	}, 

	"GJ": {

		"name": "Gujarat",
		"capital": {
			"name": "Gandhinagar",
			"details": [
				{
					"name": "Gandhinagar",
					"coordinates": [ 23.215635, 72.636941 ],
					"population": "208,299",
					"sexratio": 903,
					"literacy": 93.70
				}
			]
		},
		"population": "60,439,692",
		"growth": 19.28,
		"area": 196244,
		"density": 308,
		"sexratio": 919,
		"literacy": 78.03,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":15,"UPA":11,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":26,"UPA":0,"Others":0}},
		"TurnOut":[47.9,63.6],
        "maleTurnout": 67.17,
		"femaleTurnout": 59.69, 
		"totalTurnout": 63.6

	},

	"OR": {

		"name": "Odisha",
		"capital": {
			"name": "Bhubaneshwar",
			"details": [
				{
					"name": "Bhubaneshwar",
					"coordinates": [ 20.296059, 85.824540 ],
					"population": "881,988",
					"sexratio": 882,
					"literacy": 93.15
				}
			]
		},
		"population": "41,974,218",
		"growth": 14.05,
		"area": 155707,
		"density": 270,
		"sexratio": 979,
		"literacy": 72.87,
		"results_by_party":{"PC_2009":{"winning_party":"Others","NDA":0,"UPA":6,"Others":15},"PC_2014":{"winning_party":"NDA","NDA":21,"UPA":0,"Others":0}},
		"TurnOut":[65.33,73.75],
        "maleTurnout": 72.61,
		"femaleTurnout": 74.99, 
		"totalTurnout": 73.75

	}, 

	"KL": {

		"name": "Kerala",
		"capital": {
			"name": "Thiruvanandhapuram",
			"details": [
				{
					"name": "Thiruvanandhapuram",
					"coordinates": [ 8.524139, 76.936638 ],
					"population": "1,687,406",
					"sexratio": 1064,
					"literacy": 93.72
				}
			]
		},
		"population": "33,406,061",
		"growth": 4.91,
		"area": 38852,
		"density": 860,
		"sexratio": 1084,
		"literacy": 94.00,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":16,"Others":4},"PC_2014":{"winning_party":"UPA","NDA":2,"UPA":18,"Others":0}},
		"TurnOut":[73.53,73.89],
        "maleTurnout": 73.96,
		"femaleTurnout": 73.84, 
		"totalTurnout": 73.89

	},

	"JH": {

		"name": "Jharkhand",
		"capital": {
			"name": "Ranchi",
			"details": [
				{
					"name": "Ranchi",
					"coordinates": [ 23.344100, 85.309562 ],
					"population": "1,126,741",
					"sexratio": 920,
					"literacy": 88.49
				}
			]
		},
		"population": "32,988,134",
		"growth": 22.42,
		"area": 79716,
		"density": 414,
		"sexratio": 948,
		"literacy": 66.41,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":11,"UPA":3,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":12,"UPA":2,"Others":0}},
		"TurnOut":[50.95,63.87],
        "maleTurnout": 64.21,
		"femaleTurnout": 63.5, 
		"totalTurnout": 63.87

	},

	"AS": {

		"name": "Assam",
		"capital": {
			"name": "Dispur",
			"details": [
				{
					"name": "Dispur",
					"coordinates": [ 26.140833, 91.790833 ]
				}
			]
		},
		"population": "31,205,576",
		"growth": 17.07,
		"area": 78438,
		"density": 398,
		"sexratio": 958,
		"literacy": 72.19,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":6,"UPA":8,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":11,"UPA":3,"Others":0}},
		"TurnOut":[69.52,79.88],
        "maleTurnout": 80.48,
		"femaleTurnout": 79.24, 
		"totalTurnout": 79.88

	},

	"PB": {

		"name": "Punjab",
		"capital": {
			"name": "Chandigarh",
			"details": [
				{
					"name": "Chandigarh",
					"coordinates": [ 30.733315, 76.779418 ],
					"population": "1,025,682",
					"sexratio": 829,
					"literacy": 86.77
				}
			]
		},
		"population": "27,743,338",
		"growth": 13.89,
		"area": 50362,
		"density": 551,
		"sexratio": 895,
		"literacy": 75.84,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":5,"UPA":8,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":6,"UPA":3,"Others":4}},
		"TurnOut":[69.75,70.61],
        "maleTurnout": 70.33,
		"femaleTurnout": 70.93, 
		"totalTurnout": 70.61

	},

	"CT": {

		"name": "Chhattisgarh",
		"capital": {
			"name": "Raipur",
			"details": [
				{
					"name": "Raipur",
					"coordinates": [ 21.251384, 81.629641 ],
					"population": "1,122,555",
					"sexratio": 945,
					"literacy": 86.90
				}
			]
		},
		"population": "25,545,198",
		"growth": 22.61,
		"area": 135192,
		"density": 189,
		"sexratio": 991,
		"literacy": 70.28,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":10,"UPA":1,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":10,"UPA":1,"Others":0}},
		"TurnOut":[55.28,69.54],
        "maleTurnout": 70.89,
		"femaleTurnout": 68.16, 
		"totalTurnout": 69.54

	},

	"HR": {

		"name": "Haryana",
		"capital": {
			"name": "Chandigarh",
			"details": [
				{
					"name": "Chandigarh",
					"coordinates": [ 30.733315, 76.779418 ],
					"population": "1,025,682",
					"sexratio": 829,
					"literacy": 86.77
				}
			]
		},
		"population": "25,351,462",
		"growth": 19.90,
		"area": 44212,
		"density": 573,
		"sexratio": 879,
		"literacy": 75.55,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":10,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":7,"UPA":3,"Others":0}},
		"TurnOut":[67.48,71.41],
        "maleTurnout": 72.87,
		"femaleTurnout": 69.69, 
		"totalTurnout": 71.41

	},

	"DL": {

		"name": "Delhi",
		"capital": {
			"name": "Delhi",
			"details": [
				{
					"name": "Delhi",
					"coordinates": [ 28.613939, 77.209021 ],
					"population": "16,314,838",
					"sexratio": 875,
					"literacy": 87.60
				}
			]
		},
		"population": "16,787,941",
		"growth": 21.21,
		"area": 1483,
		"density": 11320,
		"sexratio": 868,
		"literacy": 86.21,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":7,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":7,"UPA":0,"Others":0}},
		"TurnOut":[51.85,65.07],
        "maleTurnout": 66.00,
		"femaleTurnout": 63.93, 
		"totalTurnout": 65.07

	},

	"JK": {

		"name": "Jammu and Kashmir",
		"capital": {
			"name": "Srinagar(summer), Jammu(winter)",
			"details": [
				{
					"name": "Srinagar (summer)",
					"coordinates": [ 34.083658, 74.797368 ],
					"population": "1,273,312",
					"sexratio": 888,
					"literacy": 70.98
				},
				{
					"name": "Jammu (winter)",
					"coordinates": [ 32.726602, 74.857026 ],
					"population": "651,826",
					"sexratio": 898,
					"literacy": 89.66
				}
			]
		},
		"population": "12,541,302",
		"growth": 23.64,
		"area": 222236,
		"density": 56,
		"sexratio": 889,
		"literacy": 67.16,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":6,"Others":0},"PC_2014":{"winning_party":"UPA","NDA":3,"UPA":3,"Others":0}},
		"TurnOut":[39.68,49.52],
        "maleTurnout": 50.7,
		"femaleTurnout": 48.21, 
		"totalTurnout": 49.52

	},

	"UT": {

		"name": "Uttarakhand",
		"capital": {
			"name": "Dehradun",
			"details": [
				{
					"name": "Dehradun",
					"coordinates": [ 30.316495, 78.032192 ],
					"population": "714,223",
					"sexratio": 906,
					"literacy": 89.32
				}
			]
		},
		"population": "10,086,292",
		"growth": 18.81,
		"area": 53483,
		"density": 189,
		"sexratio": 963,
		"literacy": 78.82,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":5,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":5,"UPA":0,"Others":0}},
		"TurnOut":[53.49,61.6],
        "maleTurnout": 60.48,
		"femaleTurnout": 62.84, 
		"totalTurnout": 61.6

	},

	"HP": {

		"name": "Himachal Pradesh",
		"capital": {
			"name": "Shimla",
			"details": [
				{
					"name": "Shimla",
					"coordinates": [ 31.104814, 77.173403 ],
					"population": "171,817",
					"sexratio": 818,
					"literacy": 94.67
				}
			]
		},
		"population": "6,864,602",
		"growth": 12.94,
		"area": 55673,
		"density": 123,
		"sexratio": 972,
		"literacy": 82.80,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":3,"UPA":1,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":4,"UPA":0,"Others":0}},
		"TurnOut":[58.45,64.42],
        "maleTurnout": 63.43,
		"femaleTurnout": 65.46, 
		"totalTurnout": 64.42

	},

	"TR": {

		"name": "Tripura",
		"capital": {
			"name": "Agartala",
			"details": [
				{
					"name": "Agartala",
					"coordinates": [ 23.831457, 91.286778 ],
					"population": "399,688",
					"sexratio": 1002,
					"literacy": 93.88
				}
			]
		},
		"population": "3,673,917",
		"growth": 14.84,
		"area": 10486,
		"density": 350,
		"sexratio": 960,
		"literacy": 87.22,
		"results_by_party":{"PC_2009":{"winning_party":"Others","NDA":0,"UPA":0,"Others":2},"PC_2014":{"winning_party":"UPA","NDA":0,"UPA":2,"Others":0}},
		"TurnOut":[84.8,84.72],
        "maleTurnout": 85.06,
		"femaleTurnout": 84.37, 
		"totalTurnout": 84.72

	},

	"ML": {

		"name": "Meghalaya",
		"capital": {
			"name": "Shillong",
			"details": [
				{
					"name": "Shillong",
					"coordinates": [ 25.578773, 91.893254 ],
					"population": "354,325",
					"sexratio": 1042,
					"literacy": 92.34
				}
			]
		},
		"population": "2,966,889",
		"growth": 27.95,
		"area": 22429,
		"density": 132,
		"sexratio": 989,
		"literacy": 74.43,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":1,"Others":1},"PC_2014":{"winning_party":"UPA","NDA":1,"UPA":1,"Others":0}},
		"TurnOut":[64.38,68.79],
        "maleTurnout": 67.48,
		"femaleTurnout": 70.07, 
		"totalTurnout": 68.79

	},

	"MN": {

		"name": "Manipur",
		"capital": {
			"name": "Imphal",
			"details": [
				{
					"name": "Imphal",
					"coordinates": [ 24.820000, 93.950000 ],
					"population": "414,288",
					"sexratio": 1055,
					"literacy": 91.70
				}
			]
		},
		"population": "2,570,390",
		"growth": 12.05,
		"area": 22327,
		"density": 115,
		"sexratio": 992,
		"literacy": 79.21,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":2,"Others":0},"PC_2014":{"winning_party":"UPA","NDA":0,"UPA":2,"Others":0}},
		"TurnOut":[76.99,79.62],
        "maleTurnout": 78.66,
		"femaleTurnout": 80.54, 
		"totalTurnout": 79.62

	},

	"NL": {

		"name": "Nagaland",
		"capital": {
			"name": "Kohima",
			"details": [
				{
					"name": "Kohima",
					"coordinates": [ 25.670100, 94.107700 ]
				}
			]
		},
		"population": "1,978,502",
		"growth": -0.58,
		"area": 16579,
		"density": 119,
		"sexratio": 931,
		"literacy": 79.55,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0}},
		"TurnOut":[90,87.82],
        "maleTurnout": 88.15,
		"femaleTurnout": 87.48, 
		"totalTurnout": 87.82

	},

	"GA": {

		"name": "Goa",
		"capital": {
			"name": "Panaji",
			"details": [
				{
					"name": "Panaji",
					"coordinates": [ 15.490930, 73.827850 ]
				}
			]
		},
		"population": "1,458,545",
		"growth": 8.23,
		"area": 3702,
		"density": 394,
		"sexratio": 973,
		"literacy": 88.70,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":1,"UPA":1,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":2,"UPA":0,"Others":0}},
		"TurnOut":[55.31,77.02],
        "maleTurnout": 74.91,
		"femaleTurnout": 79.11, 
		"totalTurnout": 77.02

	},

	"AR": {

		"name": "Arunachal Pradesh",
		"capital": {
			"name": "Itanagar",
			"details": [
				{
					"name": "Itanagar",
					"coordinates": [ 27.084368, 93.605316 ]
				}
			]
		},
		"population": "1,383,727",
		"growth": 26.03,
		"area": 83743,
		"density": 17,
		"sexratio": 938,
		"literacy": 65.38,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":2,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":1,"UPA":1,"Others":0}},
		"TurnOut":[68.15,78.61],
        "maleTurnout": 76.2,
		"femaleTurnout": 81.02, 
		"totalTurnout": 78.61

	},

	"PY": {

		"name": "Puducherry",
		"capital": {
			"name": "Puducherry",
			"details": [
				{
					"name": "Puducherry",
					"coordinates": [ 11.913860, 79.814472 ],
					"population": "654,392",
					"sexratio": 1045,
					"literacy": 89.29
				}
			]
		},
		"population": "1,247,953",
		"growth": 28.08,
		"area": 490,
		"density": 2547,
		"sexratio": 1037,
		"literacy": 85.85,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":1,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0}},
		"TurnOut":[79.81,82.1],
        "maleTurnout": 81.32,
		"femaleTurnout": 82.81, 
		"totalTurnout": 82.1

	},

	"MZ": {

		"name": "Mizoram",
		"capital": {
			"name": "Aizawl",
			"details": [
				{
					"name": "Aizawl",
					"coordinates": [ 23.727107, 92.717639 ],
					"population": "291,822",
					"sexratio": 1029,
					"literacy": 98.80
				}
			]
		},
		"population": "1,097,206",
		"growth": 23.48,
		"area": 21081,
		"density": 52,
		"sexratio": 976,
		"literacy": 91.33,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":1,"Others":0},"PC_2014":{"winning_party":"UPA","NDA":0,"UPA":1,"Others":0}},
		"TurnOut":[52.84,61.69],
        "maleTurnout": 62.44,
		"femaleTurnout": 60.97, 
		"totalTurnout": 61.69

	},

	"CH": {

		"name": "Chandigarh",
		"capital": {
			"name": "Chandigarh",
			"details": [
				{
					"name": "Chandigarh",
					"coordinates": [ 30.733315, 76.779418 ],
					"population": "1,025,682",
					"sexratio": 829,
					"literacy": 86.77
				}
			]
		},
		"population": "1,055,450",
		"growth": 17.19,
		"area": 114,
		"density": 9258,
		"sexratio": 818,
		"literacy": 86.05,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":1,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0}},
		"TurnOut":[65.51,73.71],
        "maleTurnout": 73.42,
		"femaleTurnout": 74.04, 
		"totalTurnout": 73.71

	},

	"SK": {

		"name": "Sikkim",
		"capital": {
			"name": "Gangtok",
			"details": [
				{
					"name": "Gangtok",
					"coordinates": [ 27.338936, 88.606504 ]
				}
			]
		},
		"population": "610,577",
		"growth": 12.89,
		"area": 7096,
		"density": 86,
		"sexratio": 890,
		"literacy": 81.42,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0}},
		"TurnOut":[85.55,83.37],
        "maleTurnout": 82.89,
		"femaleTurnout": 83.88, 
		"totalTurnout": 83.37

	},

	"AN": {

		"name": "Andaman and Nicobar Islands",
		"capital": {
			"name": "Port Blair",
			"details": [
				{
					"name": "Port Blair",
					"coordinates": [ 11.623377, 92.726483 ],
					"population": "100,608",
					"sexratio": 889,
					"literacy": 89.76
				}
			]
		},
		"population": "380,581",
		"growth": 6.86,
		"area": 8249,
		"density": 46,
		"sexratio": 876,
		"literacy": 86.63,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0}},
		"TurnOut":[64.17,70.66],
        "maleTurnout": 70.86,
		"femaleTurnout": 70.43, 
		"totalTurnout": 70.66

	},

	"DN": {

		"name": "Dadra and Nagar Haveli",
		"capital": {
			"name": "Silvassa",
			"details": [
				{
					"name": "Silvassa",
					"coordinates": [ 20.276266, 73.008306 ]
				}
			]
		},
		"population": "343,709",
		"growth": 55.88,
		"area": 491,
		"density": 700,
		"sexratio": 774,
		"literacy": 76.24,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0}},
		"TurnOut":[73.23,84.06],
        "maleTurnout": 82.66,
		"femaleTurnout": 85.71, 
		"totalTurnout": 84.06

	},

	"DD": {

		"name": "Daman and Diu",
		"capital": {
			"name": "Daman",
			"details": [
				{
					"name": "Daman",
					"coordinates": [ 20.397374, 72.832799 ]
				}
			]
		},
		"population": "243,247",
		"growth": 53.76,
		"area": 111,
		"density": 2191,
		"sexratio": 618,
		"literacy": 87.10,
		"results_by_party":{"PC_2009":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0},"PC_2014":{"winning_party":"NDA","NDA":1,"UPA":0,"Others":0}},
		"TurnOut":[71.32,78.01],
        "maleTurnout": 74.33,
		"femaleTurnout": 81.83, 
		"totalTurnout": 78.01

	},

	"LD": {

		"name": "Lakshadweep",
		"capital": {
			"name": "Kavaratti",
			"details": [
				{
					"name": "Kavaratti",
					"coordinates": [ 10.559320, 72.635813 ]
				}
			]
		},
		"population": "64,473",
		"growth": 6.30,
		"area": 30,
		"density": 2149,
		"sexratio": 946,
		"literacy": 91.85,
		"results_by_party":{"PC_2009":{"winning_party":"UPA","NDA":0,"UPA":1,"Others":0},"PC_2014":{"winning_party":"UPA","NDA":0,"UPA":1,"Others":0}},
		"TurnOut":[85.9,86.61],
        "maleTurnout": 84.87,
		"femaleTurnout": 848.42, 
		"totalTurnout": 86.61

	}

};

// assign the data 
var indiaCensus = {

	states: stateCensus

};