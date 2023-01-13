import secondaryImg from '../assets/photo-unavailable.png';

// get the url for each image
// can be updated later to use a third-party API to get an image if the marvel api doesnt provide an image
export default function useGetImage(path, extension) {
    let url = `${path}.${extension}`;

    // if marvel api does not provide an image, use a secondary image
    if(url.slice(-17) === "not_available.jpg" || url.slice(-17) === "4c002e0305708.gif"){
        url = secondaryImg;
    } 

    return url;
}
