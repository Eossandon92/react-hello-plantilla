import { IconCloud } from "../../components/ui/icon-cloud"

const images = [
    "https://img.icons8.com/?size=48&id=108784&format=png",
    "https://img.icons8.com/?size=48&id=zQ92KI7XjZgR&format=png",
    "https://img.icons8.com/?size=80&id=ZlnO0XmPfMbB&format=png",
    "https://img.icons8.com/?size=48&id=123603&format=png",
    "https://img.icons8.com/?size=48&id=20909&format=png",
    "https://img.icons8.com/?size=48&id=7gdY5qNXaKC0&format=png",
    "https://img.icons8.com/?size=48&id=9OGIyU8hrxW5&format=png",
    "https://img.icons8.com/?size=48&id=J6KcaRLsTgpZ&format=png",
    "https://img.icons8.com/?size=48&id=13441&format=png",
    "https://img.icons8.com/?size=48&id=22989&format=png",
    "https://img.icons8.com/?size=48&id=122959&format=png",
    "https://img.icons8.com/?size=48&id=20906&format=png",
    "https://img.icons8.com/?size=80&id=LoL4bFzqmAa0&format=png",
    "https://img.icons8.com/?size=48&id=114474&format=png",
    "https://img.icons8.com/?size=48&id=PndQWK6M1Hjo&format=png",
    "https://img.icons8.com/?size=48&id=21896&format=png",
    "https://img.icons8.com/?size=48&id=vgMoO3QkEnKf&format=png",
    "https://img.icons8.com/?size=64&id=lJZ16p1saeUT&format=png"


]
export default function IconCloudDemo() {
    return (
        <div className="">
            <div className="">
                <div className="">

                </div>
                <div className=" relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg ">
                    <IconCloud images={images} />
                </div>
            </div>
        </div>
    )
}

