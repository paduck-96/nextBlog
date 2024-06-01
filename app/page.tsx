import Heading from "@/components/Heading";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Heading>Paduck Simple Blog</Heading>
            <p className="pb-3">
                개인 작성 블로그 개발
            </p>
            <div className="bg-white border rounded shadow w-80
                      hover:shadow-xl sm:w-full">
                <Link href="/app/recaps/next_static"
                      className="flex flex-col sm:flex-row">
                    <img src="" alt=""
                         width="320" height="180"
                         className="rounded-t sm:rounded-l sm:rounded-r-none"
                    />
                    <h2 className="font-hiMelody font-semibold py-1 text-center sm:px-2">
                        Next.js Static
                    </h2>
                </Link>
                <Link href="/app/recaps/next_server"
                      className="flex flex-col sm:flex-row">
                    <img src="" alt=""
                         width="320" height="180"
                         className="rounded-t sm:rounded-l sm:rounded-r-none"
                    />
                    <h2 className="font-hiMelody font-semibold py-1 text-center sm:px-2">
                        Next.js Server
                    </h2>
                </Link>
            </div>
        </>
    );
}