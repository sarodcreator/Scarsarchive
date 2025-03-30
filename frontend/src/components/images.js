// import Image1 from '../images/image 2.jpg';
// import Image2 from '../images/image-1.jpg';
// import Image3 from '../images/image-2.jpg';
// import Image4 from '../images/image-3.jpg';
// import Image5 from '../images/image-4.jpg';
// import Image6 from '../images/image 3.jpg';

// export const wedding = [
//     {
//         image: Image1,
//     },
//     {
//         image: Image2,
//     },
//     {
//         image: Image3,
//     },
//     {
//         image: Image4,
//     },
//     {
//         image: Image5,
//     },
//     {
//         image: Image6,
//     }
// ];

// export const birthday = [
//     {
//         image: Image3,
//     },
//     {
//         image: Image4,
//     },
//     {
//         image: Image5,
//     },
//     {
//         image: Image6,
//     },
//     {
//         image: Image1,
//     },
//     {
//         image: Image2,
//     }
// ];

// export const travel = [
//     {
//         image: Image6,
//     },
//     {
//         image: Image5,
//     },
//     {
//         image: Image4,
//     },
//     {
//         image: Image3,
//     },
//     {
//         image: Image2,
//     },
//     {
//         image: Image1,
//     }
// ];


const importImages = (folder) => {
    try {
        return require.context(`../images/${folder}`, true, /\.(png|jpe?g|svg)$/).keys().map((image) => 
        require(`../images/${folder}/${image.replace("./", "")}`));
    } catch (error) {
        console.log(`Error loading images from ${folder}:`, error);
        return [];
    }
}

const Logos = importImages("icons");
const birthdayhighlight = importImages("birthdays/highlight");
const birthdayZara = importImages("birthdays/zara");
const ProposalImages = importImages("proposal");
const TradAlex = importImages("traditionalWeddings/Djalex");
const TradLeila = importImages("traditionalWeddings/laila&nasir");
const TradZara = importImages("traditionalWeddings/zara&ahmed");
const travelImages = importImages("travels");
const whitewed = importImages("whiteweddings");


export {
    Logos,
    birthdayhighlight,
    birthdayZara,
    ProposalImages,
    TradAlex,
    TradZara,
    TradLeila,
    travelImages,
    whitewed,
}