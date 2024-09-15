// use client ディレクティブを追加する
"use client";

export function LikeButton( {photoID}: {photoID: string} ){
    return(
        <button onClick={() => { console.log('photoId $(photoId)が「いいね」されました')} } >
        いいね
        <button/>
    );
}
