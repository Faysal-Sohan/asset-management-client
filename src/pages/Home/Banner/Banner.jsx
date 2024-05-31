import img1 from '../../../assets/Home/Banner1.png'
import img2 from '../../../assets/Home/Banner2.png'
import { Carousel, Typography, Button } from "@material-tailwind/react";

const Banner = () => {
    return (

        <Carousel className="rounded-xl">
            <div className="relative h-full w-full">
                <img
                    src={img1}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full place-items-center w-full bg-black/55">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Enhance Your Workday 
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Get easy access to the tools you need. Request laptops, phones, office supplies, and more - all in one place.
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Join as Employee
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={img2}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                    <div className="w-3/4 pl-8 md:w-2/4 md:pl-20 lg:pr-24 absolute right-0">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Empower Your Team
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Simplify asset allocation and tracking for your employees. Approve requests, monitor usage, and optimize resource management.
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Join as HR/Admin
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;