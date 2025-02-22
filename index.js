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


class AnimalDataLoader {
    constructor(files) {
        this.files = files;
        this.container = document.getElementById("animal-container");
        this.animalData = {};
    }

    async loadData() {
        for (const file of this.files) {
            try {
                const response = await fetch(file);
                const data = await response.json();
                const category = this.formatCategory(file);
                this.animalData[category] = data;
                this.displayAnimals(category);
            } catch (error) {
                console.error(`Error loading ${file}:`, error);
            }
        }
    }

    formatCategory(file) {
        return file.split("/").pop().split(".")[0].replace("_", " ").toUpperCase();
    }

    displayAnimals(category) {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        const heading = document.createElement("h2");
        heading.textContent = category;
        categoryDiv.appendChild(heading);

        const animalContainer = document.createElement("div");
        animalContainer.classList.add("animals");

        this.animalData[category].forEach((animal, index) => {
            const animalCard = document.createElement("div");
            animalCard.classList.add("animal-card");
            animalCard.setAttribute("data-index", index);
            animalCard.setAttribute("data-category", category);

            animalCard.innerHTML = `
                <img src="${animal.image}" alt="${animal.name}">
                <div class="animal-details">
                    <h3>${animal.name}</h3>
                    <p><strong>Species:</strong> ${animal.species}</p>
                    <p><strong>Size:</strong> ${animal.size}</p>
                    <p><strong>Location:</strong> ${animal.location}</p>
                </div>
            `;
            animalContainer.appendChild(animalCard);
        });

        categoryDiv.appendChild(animalContainer);
        this.container.appendChild(categoryDiv);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const jsonFiles = ["bigcats.json", "dogs.json", "bigfish.json"];
    const loader = new AnimalDataLoader(jsonFiles);
    loader.loadData();
});
