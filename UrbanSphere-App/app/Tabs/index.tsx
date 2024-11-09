
import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const CityData: Record<string, { location: string; "PM2.5": number }[]> = require('../../data/almighty.json');

const Index: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Delhi");
  const [localities, setLocalities] = useState<{ location: string, "PM2.5": number }[]>([]);

  useEffect(() => {
    if (selectedCity) {
      setLocalities(CityData[selectedCity]);
    }
  }, [selectedCity]);

  const getColor = (aqi: number): string => {
    if (aqi <= 50) return "green";
    else if (aqi <= 100) return "yellow";
    else if (aqi <= 150) return "orange";
    return "red";
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Select City</Text>
      <Picker
        selectedValue={selectedCity}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCity(itemValue as string)}
      >
        {Object.keys(CityData).map((city) => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>

      <Text style={styles.subtitle}>Locality Data for {selectedCity}</Text>
      <ScrollView horizontal style={styles.scrollView}>
        <Svg height="300" width="800">
          {localities.map((loc, index) => (
            <Circle
              key={index}
              cx={(index % 5) * 150 + 50}
              cy={Math.floor(index / 5) * 100 + 50}
              r={20}
              fill={getColor(loc["PM2.5"])}
            />
          ))}
          {localities.map((loc, index) => (
            <SvgText
              key={index + "_text"}
              x={(index % 5) * 150 + 50}
              y={Math.floor(index / 5) * 100 + 90}
              fontSize="12"
              fill="black"
              textAnchor="middle"
            >
              {loc.location}
            </SvgText>
          ))}
        </Svg>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: 200,
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  scrollView: {
    marginVertical: 20,
  },
});

export default Index;

// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, SafeAreaView, Text, ScrollView } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';

// const CityData: Record<string, { location: string; "PM2.5": number }[]> = require('../../data/almighty.json');

// const Index: React.FC = () => {
//   const [selectedCity, setSelectedCity] = useState<string>("Delhi");
//   const [localities, setLocalities] = useState<{ location: string; "PM2.5": number }[]>([]);

//   useEffect(() => {
//     if (selectedCity) {
//       setLocalities(CityData[selectedCity]);
//     }
//   }, [selectedCity]);

//   const getColor = (aqi: number): string => {
//     if (aqi <= 50) return "green";
//     else if (aqi <= 100) return "yellow";
//     else if (aqi <= 150) return "orange";
//     return "red";
//   };

//   // Max PM2.5 value for scaling the graph on the y-axis
//   const maxPM25 = Math.max(...localities.map(loc => loc["PM2.5"]));

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Select City</Text>
//       <Picker
//         selectedValue={selectedCity}
//         style={styles.picker}
//         onValueChange={(itemValue) => setSelectedCity(itemValue as string)}
//       >
//         {Object.keys(CityData).map((city) => (
//           <Picker.Item key={city} label={city} value={city} />
//         ))}
//       </Picker>

//       <Text style={styles.subtitle}>Locality Data for {selectedCity}</Text>
//       <ScrollView horizontal style={styles.scrollView}>
//         <Svg height="300" width="800">
//           {/* X and Y Axis */}
//           <Line x1="50" y1="250" x2="750" y2="250" stroke="black" strokeWidth="2" />
//           <Line x1="50" y1="250" x2="50" y2="50" stroke="black" strokeWidth="2" />
          
//           {localities.map((loc, index) => {
//             const x = (index + 1) * 100 + 50;  // Space out the points along the x-axis
//             const y = 250 - (loc["PM2.5"] / maxPM25) * 200; // Scale PM2.5 value to fit the y-axis

//             return (
//               <React.Fragment key={index}>
//                 <Circle cx={x} cy={y} r={20} fill={getColor(loc["PM2.5"])} />
//                 <SvgText x={x} y={y + 25} fontSize="12" fill="black" textAnchor="middle">
//                   {loc.location}
//                 </SvgText>
//               </React.Fragment>
//             );
//           })}
//         </Svg>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     padding: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   picker: {
//     height: 50,
//     width: 200,
//     alignSelf: "center",
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: "center",
//     marginVertical: 20,
//   },
//   scrollView: {
//     marginVertical: 20,
//   },
// });

// export default Index;
