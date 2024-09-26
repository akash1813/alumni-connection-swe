import Header from "../components/Header.jsx";
import { Label, TextInput, Textarea, Button } from "flowbite-react";

export default function Contact() {
    return <div >
        <Header name={"Contact"}/>

        <div id={"main-container"} className={"mx-[2rem] lg:mx-[12rem] mt-10 flex-grow md:mx-[3rem]"}>
            <div className={"font-semibold text-4xl"}>Get in Touch</div>
            <p className={"mt-7 text-gray-500"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi debitis adipisci repellat ex accusamus quia quaerat magnam? Voluptas officiis tempora error officia beatae nemo tempore, dolorem doloribus aliquam sequi blanditiis?</p>
            <div id={"form-container"}>
                <form>
                    <table className={"w-full"}>
                        <tr>
                            <td className={"p-3"}>
                                <div className="">
                                    <div className="mb-2 block">
                                        <Label htmlFor="name" value="Name"/>
                                    </div>
                                    <TextInput id="name" type="text"
                                               placeholder="John Doe" required/>
                                </div>
                            </td>
                            <td className={"p-3"}>
                                <div className="ml-4">
                                    <div className="mb-2 block">
                                        <Label htmlFor="phone" value="Phone"/>
                                    </div>
                                    <TextInput id="phone" type="text"
                                               placeholder="9876543210" required/>
                                </div>
                            </td>
                        </tr>

                        <tr className={"mt-3"}>
                            <td className={"p-3"}>
                                <div className="">
                                    <div className="mb-2 block">
                                        <Label htmlFor="email" value="Email"/>
                                    </div>
                                    <TextInput id="email" type="text"
                                               placeholder="john@example.com" required/>
                                </div>
                            </td>
                            <td className={"p-3"}>
                                <div className="ml-4">
                                    <div className="mb-2 block">
                                        <Label htmlFor="subject" value="Subject"/>
                                    </div>
                                    <TextInput id="subject" type="text"
                                               placeholder="How to post a new job?" required/>
                                </div>
                            </td>
                        </tr>
                        <tr className={""}>
                            <td colspan={2} className={"p-3"}>
                                <div className="">
                                    <div className="mb-2 block">
                                        <Label htmlFor="comment" value="Message"/>
                                    </div>
                                    <Textarea id="comment" placeholder="Leave a comment..." required rows={8}/>
                                </div>

                            </td>

                        </tr>
                        <tr>
                            <td className={"p-3"}>
                                <Button type={"submit"} outline gradientDuoTone="purpleToBlue" className={"w-[8rem]"}>
                                    Send
                                </Button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>
}