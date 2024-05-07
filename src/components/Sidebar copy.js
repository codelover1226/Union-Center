import React, { forwardRef, useImperativeHandle } from "react";
import {
  IconButton,
  Typography,
  Drawer,
  Card,
  CardHeader,
  CardBody
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


const Sidebar = forwardRef(({ parentFunction }, ref) => {
    const openDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
        parentFunction();
    }
    const closeDrawer = () => setIsDrawerOpen(false);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    
    useImperativeHandle(ref, () => ({
        callParentFunction: parentFunction,
        log() {
            openDrawer();
        }
    }));
 
  return ( 
            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
            <Card
                // color="blue-gray"
                shadow={true}
                className="h-[calc(100vh-0rem)] w-full rounded-none z-10"
                style={{ backgroundColor: '#153644' }}
            >
                                
                        {/* <IconButton variant="text" size="lg" onClick={openDrawer} className="mt-3 ml-7">
                            {isDrawerOpen ? (
                                <XMarkIcon className="h-12 w-12 stroke-1 text-red-50" 
                                    animate={{
                                    mount: { scale:  1, opacity:  1 },
                                    unmount: { scale:  0, opacity:  0 },
                                    }}
                                />
                                ) : (
                                <Bars3Icon className="h-12 w-12 stroke-1 text-red-50" 
                                    animate={{
                                    mount: { scale:  1, opacity:  1 },
                                    unmount: { scale:  0, opacity:  0 },
                                    }}
                                />
                            )}
                        </IconButton> */}
                <CardBody>
                    <Typography
                        as="a"
                        href="#"
                        variant="h3"
                        className="font-thin m-6"
                    >
                        HOME
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="h3"
                        className="font-thin m-6"
                    >
                        VISION
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="h3"
                        className="font-thin m-6"
                    >
                        RESIDENCES
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="h3"
                        className="font-thin m-6"
                    >
                        AMENITIES
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="h3"
                        className="font-thin m-6"
                    >
                        NEIGHBORHOOD
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="h3"
                        className="font-thin m-6"
                    >
                        AVAILABILITY
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="h3"
                        className="font-thin m-6"
                    >
                        GALLERY
                    </Typography>
                    <Typography
                        as="a"
                        href="#"
                        variant="h3"
                        className="font-thin m-6"
                    >
                        CONTACT
                    </Typography>
                </CardBody>
            </Card>
        </Drawer>
)});

Sidebar.displayName = "Sidebar";

export default Sidebar;
