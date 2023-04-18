import Navbar from './Navbar.jsx';
import Footer from './Footer';

const CheckoutForm = () => {
    return (
        <>
            <Navbar />
            <div className="isolate bg-white text-black  px-6 sm:py-10 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    {/* <p className="mt-2 text-lg leading-8 text-black">
                        Checkout
                    </p> */}
                </div>
                <form
                    action="#"
                    method="POST"
                    className="mx-auto mt-16 max-w-xl sm:mt-20"
                >
                    <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    placeholder="Enter First Name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    placeholder="Enter Last Name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="topic"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Address
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="address"
                                    name="address"
                                    id="address"
                                    placeholder="Enter Address"
                                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="topic"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Phone Number
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="phonenumber"
                                    name="phonenumber"
                                    id="phonenumber"
                                    placeholder="Enter Phone Number"
                                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="topic"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Time
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="deliverytime"
                                    name="deliverytime"
                                    id="deliverytime"
                                    placeholder="Enter delivery time"
                                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-2 mt-2">
                        <label
                            htmlFor="topic"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Payment Method
                        </label>
                        <div className="mt-2.5">
                            <select
                                name="paymentmethod"
                                id="paymentmethod"
                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1   ring-gray-300 sm:text-sm sm:leading-6"
                            >
                                <option value="">Select Payment Method</option>
                                <option value="khalti">Khalti</option>
                                <option value="cashondelivery">
                                    Cash on Delivery
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};
export default CheckoutForm;
