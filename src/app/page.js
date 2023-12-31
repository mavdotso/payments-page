import PaymentCard from './components/PaymentCard';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-top">
            <div className="pt-12 pb-20 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                <Image className="relative rounded-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]" src="/cc-logo.jpg" alt="Collector's Corner Logo" width={120} height={37} priority />
                <p className="text-3xl font-semibold px-14">Collector's Corner Premium</p>
            </div>

            <div className="grid gap-2 text-left lg:grid-cols-3">
                <PaymentCard
                    planName="Founder"
                    price="4200"
                    renew="year"
                    list={['Everything in Monthly', '1:1 white-glove service including portfolio construction, sourcing OTC deals, and more']}
                ></PaymentCard>
                <PaymentCard planName="Annual" price="1000" renew="year" list={['Everything in Monthly', '17% discount']}></PaymentCard>
                <PaymentCard
                    planName="Monthly"
                    price="100"
                    renew="month"
                    list={[
                        'Weekly investment analysis & references',
                        'Monthly in-depth reports',
                        'Personalized investment recommendations',
                        'Private discord community with high end collectors',
                        'Live Q&A with industry leaders',
                        'Early & Free access to collector tools',
                    ]}
                ></PaymentCard>
            </div>

            <div className="grid gap-5 text-center lg:grid-cols-2 pt-12">
                <a
                    href="https://checkout.loopcrypto.xyz/84a05fda-58a3-4ec2-9a62-69248d304159/81344b88-3623-4520-bfbe-bcee87dffc0a"
                    type="button"
                    className="text-white bg-slate-600 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-4 inline-flex justify-center w-full text-center ease-in duration-100"
                >
                    <span className="pr-4">
                        <Image src="/ethereum-logo.svg" alt="Eth Logo" width={12} height={12} />{' '}
                    </span>
                    Pay in crypto
                </a>
                <a
                    href="/stripe-checkout"
                    type="button"
                    className="text-black bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-4 inline-flex justify-center w-full text-center ease-in duration-100"
                >
                    <span className="pr-4">
                        <Image src="/stripe-logo.svg" alt="Stripe Logo" width={18} height={18} />{' '}
                    </span>
                    Pay in fiat
                </a>
            </div>
        </main>
    );
}
