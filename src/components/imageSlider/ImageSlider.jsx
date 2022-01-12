import ImageButton from "./changeImageButton";
import Image from "./Image";

const ImageSlider = () => {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <ImageButton text={'back'}/>
                    </td>
                    <td>
                        <Image />
                    </td>
                    <td>
                        <ImageButton text={'forward'}/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ImageSlider;