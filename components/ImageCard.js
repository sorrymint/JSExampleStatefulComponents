import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const  ImageCard = ({ src, brightness, contrast, saturation }) =>  {
    const filterStyle = {
        filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
    };

    return (
        <Card className="w-[200px] h-[250px] overflow-hidden">
            <CardContent>
                <Image
                    src={src}
                    alt="Gallery image"
                    width={200}
                    height={200}
                    style={filterStyle}
                />
            </CardContent>
        </Card>
    );
}

export default ImageCard;