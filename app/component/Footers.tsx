
import React from "react";

export default function Footers() {
    return (
        <footer className="bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573] mt-0">
            <div className="mx-auto max-w-screen-xl space-y-1 px-4 py-5 sm:px-6 lg:space-y-8 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-teal-600">
                        <h1 className="font-semibold text-2xl text-[#ecf2f2]">Rian Isramdani</h1>
                    </div>

                    <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        <li>
                            <a
                                href="https://www.instagram.com/ian.isram/"
                                rel="noreferrer"
                                target="_blank"
                                className="text-[#ecf2f2] transition hover:opacity-75"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/rianisram"
                                rel="noreferrer"
                                target="_blank"
                                className="text-[#ecf2f2] transition hover:opacity-75"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/08812205618"
                                rel="noreferrer"
                                target="_blank"
                                className="text-[#ecf2f2] transition hover:opacity-75"
                            >
                                <span className="sr-only">WhatsApp</span>
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 1.892.5 3.707 1.447 5.298l-1.494 4.352 4.516-1.43c1.537.945 3.291 1.45 5.13 1.45 5.523 0 10-4.484 10-10.017C22 6.484 17.523 2 12 2zm0 18.135c-1.652 0-3.23-.448-4.615-1.29l-.33-.197-2.682.85.838-2.448-.216-.34A8.19 8.19 0 013.867 12.02c0-4.518 3.66-8.19 8.182-8.19 4.52 0 8.182 3.672 8.182 8.19 0 4.52-3.662 8.182-8.182 8.182zm4.257-6.152c-.23-.115-1.367-.676-1.579-.755-.21-.08-.363-.115-.516.116-.155.23-.593.754-.727.91-.132.155-.27.174-.5.058-.23-.115-.97-.358-1.845-1.14-.682-.607-1.142-1.358-1.276-1.588-.132-.23-.014-.353.1-.468.103-.103.23-.27.345-.405.116-.132.155-.23.23-.385.077-.155.038-.29-.02-.405-.058-.115-.516-1.24-.707-1.698-.185-.443-.37-.383-.516-.39-.132-.007-.29-.01-.447-.01-.155 0-.405.058-.617.29-.21.23-.81.79-.81 1.924s.83 2.227.946 2.38c.115.155 1.63 2.49 3.945 3.49.55.237.98.38 1.315.486.553.176 1.057.152 1.455.093.443-.065 1.367-.556 1.56-1.094.194-.538.194-.998.136-1.093-.058-.094-.21-.155-.447-.27z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-8"
                >
                </div>

                <p className="text-xs text-[#ecf2f2]">&copy; 2024. Rian Isramdani. All rights reserved.</p>
            </div>
        </footer>
    );
}