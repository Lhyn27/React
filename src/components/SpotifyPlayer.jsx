/**
 * Playlist component
 */
import React from "react";
export const SpotifyPlayer = ({ url, favorite, setFavorite}) => {
    const urlSong = `https://open.spotify.com/embed/album/${url}`;
    const favoriteSong = favorite;

    /**
     * Render que se ejecuta si el album es favorito
     */
    if (favoriteSong) {
        return (
            <div className="d-flex my-5" style={{ width: "1000px" }}>
                <iframe
                    src={urlSong}
                    width="100%"
                    height="80"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    title="lol"
                ></iframe>
                <button className="btn" onClick={setFavorite}>
                    <i className={favorite ? "bi bi-star-fill" : "bi bi-star"}></i>
                </button>
            </div>
        );
    } else {
        /**
         * Render que se ejecuta si el album no es favorito
         */
        return (
            <div className="d-flex my-5" style={{ width: "1000px" }}>
                <iframe
                    src={urlSong}
                    width="100%"
                    height="80"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    title="lol"
                ></iframe>
                <button className="btn" onClick={setFavorite}>
                    <i className="bi bi-star"></i>
                </button>
            </div>
        );
    }
};