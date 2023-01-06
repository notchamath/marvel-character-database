import secondaryImg from '../assets/photo-unavailable.png';

export default function useGetImage(path, extension) {
    let url = `${path}.${extension}`;

    if(url.slice(-17) === "not_available.jpg" || url.slice(-17) === "4c002e0305708.gif"){
        url = secondaryImg;
    } 

    return url;
}
