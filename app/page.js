"use client";
import { useState } from "react";
import ImageCard from "@/components/ImageCard";
import { Slider } from "@/components/ui/slider";

const Gallery = () => {

    // Where I got these images.  https://en.wikipedia.org/wiki/Wikipedia:Featured_pictures/Artwork/Paintings
    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/7/7f/Portrait_of_Yarrow_Mamout_%28Muhammad_Yaro%29%2C_1819._Charles_Willson_Peale.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Portrait_of_Napoleon_II_by_Thomas_Lawrence_%281818%E2%80%931819%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Giovanni_Battista_Moroni_-_The_Tailor_%281565-1570%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1c/Google_Arts_Project_-_Alexander_Hamilton_%281792_portrait%29_by_John_Trumbull.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/00/Ingres_Marcotte_d-Argenteuil.jpg",
    ];

    const [filters, setFilters] = useState({
        brightness: 100,
        contrast: 100,
        saturation: 100,
    });

    const handleFilterChange = (filterName, value) => {
        setFilters((prev) => ({
            ...prev,
            [filterName]: value[0],
        }));
    };

    return (
        <div className="space-y-8 p-4">
            <div className="space-y-6">
                <div className="space-y-2">
                    <label>Brightness: {filters.brightness}%</label>
                    <Slider
                        min={0}
                        max={200}
                        step={1}
                        value={[filters.brightness]}
                        onValueChange={(value) =>
                            handleFilterChange("brightness", value)
                        }
                    />
                </div>

                <div className="space-y-2">
                    <label>Contrast: {filters.contrast}%</label>
                    <Slider
                        min={0}
                        max={200}
                        step={1}
                        value={[filters.contrast]}
                        onValueChange={(value) =>
                            handleFilterChange("contrast", value)
                        }
                    />
                </div>

                <div className="space-y-2">
                    <label>Saturation: {filters.saturation}%</label>
                    <Slider
                        min={0}
                        max={200}
                        step={1}
                        value={[filters.saturation]}
                        onValueChange={(value) =>
                            handleFilterChange("saturation", value)
                        }
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <ImageCard
                        key={index}
                        src={src}
                        brightness={filters.brightness}
                        contrast={filters.contrast}
                        saturation={filters.saturation}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
