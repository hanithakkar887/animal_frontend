// class AnimalDataLoader {
//     constructor(files) {
//         this.files = files;
//         this.container = document.getElementById("animal-tables");
//     }

//     async loadData() {
//         for (const file of this.files) {
//             try {
//                 const response = await fetch(file);
//                 const data = await response.json();
//                 const category = this.formatCategory(file);
//                 this.displayAnimals(data, category);
//             } catch (error) {
//                 console.error(`Error loading ${file}:`, error);
//             }
//         }
//     }

//     formatCategory(file) {
//         return file.split("/").pop().split(".")[0].replace("_", " ").toUpperCase();
//     }

//     displayAnimals(animalData, category) {
//         let table = `<h2>${category}</h2><table border="1">
//             <tr id="n1">
             
//             </tr>`;

//         animalData.forEach(animal => {
//             table += `
//               <tr style:" display:flex;flex-">
//                ${animal.species}
//                ${animal.name}
//                ${animal.size}
//                ${animal.location}
//                <img src="${animal.image}" alt="${animal.name}" width="100">
//               </tr>
//             `;
//         });

//         table += "</table>";
//         this.container.innerHTML += table;
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const jsonFiles = ["bigcats.json", "dogs.json", "bigfish.json"];
//     const loader = new AnimalDataLoader(jsonFiles);
//     loader.loadData();
// });
