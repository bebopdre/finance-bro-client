import Terminal from '../../components/Terminal/Terminal';
import './HomePage.scss';

function HomePage() {
    return (
        <main className='homepage'>
            <section className='terminal'>
                <Terminal />
            </section>
        </main>
    )
}

export default HomePage;