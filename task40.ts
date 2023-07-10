for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_40")

interface Album{
    artist : string,
    title : string,
    tracks? : number
}

function make_album(artist : string, title : string, tracks? : number,) : Album{
    const album : Album = {
        artist,
        title
    }
    if(tracks){
        album.tracks = tracks
    }
    return album
}

const album1 = make_album("sikander sanam", "album1", 6);
const album2 = make_album("umer shareef", "album2", 3);
const album3 = make_album("shakeel siddiqe", "album3");

console.log(album1)
console.log(album2)
console.log(album3)