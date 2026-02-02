export default async function ImprintScreen({ data }: { data?: any }) {
    return (
        <div className="max-w-4xl mx-auto lg:pt-40 px-6 py-12">
            <h1 className="text-4xl font-bold text-[#1f4f83] mb-8">Impressum</h1>

            <p className="text-gray-700 mb-8">
                Informationen über den Diensteanbieter.
            </p>

            {/* Company Information */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-[#1f4f83] mb-4">
                    EGM – Institut für Elektrochemie, Galvanotechnik und Materialchemie Ziviltechniker GmbH
                </h2>

                <div className="space-y-2 text-gray-700">
                    <p>Brauhausgasse 21</p>
                    <p>2753 Markt Piesting, Österreich</p>
                    <p className="mt-4">Tel.: +43 699 15111555</p>
                    <p>Fax: 01234/56789-0</p>
                    <p>E-Mail: <a href="mailto:help@elektrochemie.eu" className="text-[#1f4f83] hover:underline">help@elektrochemie.eu</a></p>
                </div>
            </section>

            {/* Legal Details */}
            <section className="mb-10 space-y-2 text-gray-700">
                <p><strong>Firmenbuchnummer:</strong> 603101p</p>
                <p><strong>Firmenbuchgericht:</strong> LG Wiener Neustadt, Maria-Theresien-Ring 5, 2700 Wr. Neustadt, T +43 2622 21510</p>
                <p><strong>Firmensitz:</strong> Markt Piesting</p>
                <p><strong>Unternehmensgegenstand:</strong> Ziviltechniker für Chemie</p>
                <p><strong>UID-Nummer:</strong> ATU79334935</p>
                <p><strong>GISA (Gewerbeinformationssystem Austria):</strong> 12345678</p>
                <p><strong>Mitglied bei:</strong> Kammer der ZiviltechnikerInnen / ArchitektInnen und IngenieurInnen Wien. Niederösterreich. Burgenland.</p>
                <p><strong>Berufsrecht:</strong> Ziviltechniker</p>
            </section>

            {/* Supervisory Authority */}
            <section className="mb-10">
                <p className="text-gray-700 mb-2">
                    <strong>Aufsichtsbehörde/Gewerbebehörde:</strong> Kammer der ZiviltechnikerInnen / ArchitektInnen und IngenieurInnen
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Berufsbezeichnung:</strong> Ziviltechniker, Befugnis: Chemie
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Verleihungsstaat:</strong> Österreich
                </p>
            </section>

            {/* Management */}
            <section className="mb-10 text-gray-700">
                <p><strong>Geschäftsführer:</strong> Wolfgang Hansal, Selma Hansal</p>
                <p><strong>Beteiligungsverhältnisse:</strong> <a href="mailto:susanna.weiss@elektrochemie.eu" className="text-[#1f4f83] hover:underline">susanna.weiss@elektrochemie.eu</a></p>
            </section>

            {/* EU Dispute Resolution */}
            {/* <section className="mb-10">
                <h2 className="text-2xl font-semibold text-[#1f4f83] mb-4">EU-Streitschlichtung</h2>
                <p className="text-gray-700 mb-4">
                    Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
                    Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter{' '}
                    <a
                        href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1f4f83] hover:underline"
                    >
                        https://ec.europa.eu/consumers/odr
                    </a>{' '}
                    zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
                </p>
                <p className="text-gray-700">
                    Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section> */}

            {/* Liability for Content */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-[#1f4f83] mb-4">Haftung für Inhalte dieser Website</h2>
                <p className="text-gray-700 mb-4">
                    Wir entwickeln die Inhalte dieser Website ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von Ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-gray-700 mb-4">
                    Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon unberührt.
                </p>
                <p className="text-gray-700">
                    Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.
                </p>
            </section>

            {/* Liability for Links */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-[#1f4f83] mb-4">Haftung für Links auf dieser Website</h2>
                <p className="text-gray-700 mb-4">
                    Unsere Website enthält Links zu anderen Websites für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
                </p>
                <p className="text-gray-700">
                    Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
                </p>
            </section>

            {/* Copyright Notice */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-[#1f4f83] mb-4">Urheberrechtshinweis</h2>
                <p className="text-gray-700 mb-4">
                    Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen.
                    Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
                </p>
            </section>

            {/* Image Credits */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-[#1f4f83] mb-4">Bildernachweis</h2>
                <p className="text-gray-700 mb-4">
                    Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
                </p>
                <p className="text-gray-700">
                    Die Bilderrechte liegen bei: Shutterstock, TU Ilmenau, TU Chemnitz, Universität Wien, Jönköping University,EGM Institut für Elektrochemie, Galvanotechnik und Materialchemie Ziviltechniker GmbH.
                </p>
            </section>

            {/* Other Online Presences */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-[#1f4f83] mb-4">Weitere Onlineauftritte</h2>
                <p className="text-gray-700">
                    Dieses Impressum gilt auch für{' '}
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1f4f83] hover:underline"
                    >
                        https://www.linkedin.com/
                    </a>
                </p>
            </section>

            <p className="text-gray-600 text-sm italic">
                Alle Texte sind urheberrechtlich geschützt.
            </p>
        </div>
    );
}
