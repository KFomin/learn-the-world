import MapComponent from '../components/map.component';

export default function Home() {
    return (
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <MapComponent/>
            </main>
        </div>
    );
}
