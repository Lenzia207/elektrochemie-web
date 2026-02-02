/* eslint-disable react/no-unescaped-entities */

export default async function DataPrivacyScreen() {
    return (
        <div className="max-w-4xl mx-auto pt-40 px-6 py-12 pb-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Datenschutzerklärung</h1>
            
            {/* Table of Contents */}
            <nav className="mb-12 p-6 bg-gray-50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Inhaltsverzeichnis</h2>
                <ol className="space-y-2 list-decimal list-inside text-gray-700">
                    <li><a href="#einleitung" className="hover:text-blue-600">Einleitung und Überblick</a></li>
                    <li><a href="#anwendungsbereich" className="hover:text-blue-600">Anwendungsbereich</a></li>
                    <li><a href="#rechtsgrundlagen" className="hover:text-blue-600">Rechtsgrundlagen</a></li>
                    <li><a href="#kontaktdaten" className="hover:text-blue-600">Kontaktdaten des Verantwortlichen</a></li>
                    <li><a href="#speicherdauer" className="hover:text-blue-600">Speicherdauer</a></li>
                    <li><a href="#rechte" className="hover:text-blue-600">Rechte laut Datenschutz-Grundverordnung</a></li>
                    <li><a href="#sicherheit" className="hover:text-blue-600">Sicherheit der Datenverarbeitung</a></li>
                    <li><a href="#cookies" className="hover:text-blue-600">Cookies</a></li>
                    <li><a href="#social-media" className="hover:text-blue-600">Social Media Einleitung</a></li>
                    <li><a href="#begriffe" className="hover:text-blue-600">Erklärung verwendeter Begriffe</a></li>
                    <li><a href="#schlusswort" className="hover:text-blue-600">Schlusswort</a></li>
                </ol>
            </nav>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
                
                {/* Section 1 */}
                <section id="einleitung" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Einleitung und Überblick</h2>
                    <p className="mb-4">
                        Wir haben diese Datenschutzerklärung (Fassung 03.06.2024-122747610) verfasst, um Ihnen gemäß der Vorgaben der 
                        Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen 
                        Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – 
                        verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe 
                        sind geschlechtsneutral zu verstehen.
                    </p>
                    <p className="font-semibold mb-4">
                        Kurz gesagt: Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.
                    </p>
                    <p className="mb-4">
                        Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe. Diese 
                        Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. 
                        Soweit es der Transparenz förderlich ist, werden technische Begriffe leserfreundlich erklärt, Links zu weiterführenden 
                        Informationen geboten und Grafiken zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass 
                        wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende 
                        gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe, unklare und 
                        juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. 
                        Ich hoffe, Sie finden die folgenden Erläuterungen interessant und informativ und vielleicht ist die eine oder andere 
                        Information dabei, die Sie noch nicht kannten.
                    </p>
                    <p>
                        Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche 
                        Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen. Unsere 
                        Kontaktdaten finden Sie selbstverständlich auch im Impressum.
                    </p>
                </section>

                {/* Section 2 */}
                <section id="anwendungsbereich" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Anwendungsbereich</h2>
                    <p className="mb-4">
                        Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle 
                        personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten 
                        meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische 
                        Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und 
                        Produkte anbieten und abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser Datenschutzerklärung 
                        umfasst:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li>alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
                        <li>Social Media Auftritte und E-Mail-Kommunikation</li>
                    </ul>
                    <p className="font-semibold mb-4">
                        Kurz gesagt: Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die 
                        genannten Kanäle strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen 
                        eintreten, werden wir Sie gegebenenfalls gesondert informieren.
                    </p>
                </section>

                {/* Section 3 */}
                <section id="rechtsgrundlagen" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Rechtsgrundlagen</h2>
                    <p className="mb-4">
                        In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und 
                        Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten 
                        zu verarbeiten. Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN 
                        PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie selbstverständlich 
                        online auf EUR-Lex, dem Zugang zum EU-Recht, unter{' '}
                        <a 
                            href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
                        </a>{' '}
                        nachlesen.
                    </p>
                    <p className="mb-4">
                        Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:
                    </p>
                    <ol className="list-decimal list-inside mb-4 space-y-3">
                        <li>
                            <strong>Einwilligung (Artikel 6 Absatz 1 lit. a DSGVO):</strong> Sie haben uns Ihre Einwilligung gegeben, Daten 
                            zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines 
                            Kontaktformulars.
                        </li>
                        <li>
                            <strong>Vertrag (Artikel 6 Absatz 1 lit. b DSGVO):</strong> Um einen Vertrag oder vorvertragliche Verpflichtungen 
                            mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschließen, 
                            benötigen wir vorab personenbezogene Informationen.
                        </li>
                        <li>
                            <strong>Rechtliche Verpflichtung (Artikel 6 Absatz 1 lit. c DSGVO):</strong> Wenn wir einer rechtlichen 
                            Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen 
                            für die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.
                        </li>
                        <li>
                            <strong>Berechtigte Interessen (Artikel 6 Absatz 1 lit. f DSGVO):</strong> Im Falle berechtigter Interessen, die 
                            Ihre Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen zum 
                            Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu können. 
                            Diese Verarbeitung ist somit ein berechtigtes Interesse.
                        </li>
                    </ol>
                    <p className="mb-4">
                        Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung öffentlicher Gewalt sowie 
                        dem Schutz lebenswichtiger Interessen treten bei uns in der Regel nicht auf. Soweit eine solche Rechtsgrundlage doch 
                        einschlägig sein sollte, wird diese an der entsprechenden Stelle ausgewiesen.
                    </p>
                    <p className="mb-4">
                        Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li>In Österreich ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener 
                        Daten (Datenschutzgesetz), kurz DSG.</li>
                        <li>In Deutschland gilt das Bundesdatenschutzgesetz, kurz BDSG.</li>
                    </ul>
                    <p>
                        Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den folgenden Abschnitten 
                        darüber.
                    </p>
                </section>

                {/* Section 4 */}
                <section id="kontaktdaten" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Kontaktdaten des Verantwortlichen</h2>
                    <p>
                        Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie die 
                        Kontaktdaten der verantwortlichen Person bzw. Stelle im Impressum dieser Website.
                    </p>
                </section>

                {/* Section 5 */}
                <section id="speicherdauer" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Speicherdauer</h2>
                    <p className="mb-4">
                        Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen und 
                        Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir personenbezogene Daten 
                        löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich 
                        dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken 
                        der Buchführung.
                    </p>
                    <p className="mb-4">
                        Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten 
                        so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.
                    </p>
                    <p>
                        Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere 
                        Informationen dazu haben.
                    </p>
                </section>

                {/* Section 6 */}
                <section id="rechte" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Rechte laut Datenschutz-Grundverordnung</h2>
                    <p className="mb-4">
                        Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen 
                        und transparenten Verarbeitung von Daten kommt:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-3">
                        <li>
                            Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten. Sollte das 
                            zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden Informationen zu erfahren:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>zu welchem Zweck wir die Verarbeitung durchführen;</li>
                                <li>die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
                                <li>wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die Sicherheit 
                                garantiert werden kann;</li>
                                <li>wie lange die Daten gespeichert werden;</li>
                                <li>das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und dem 
                                Widerspruchsrecht gegen die Verarbeitung;</li>
                                <li>dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden finden Sie weiter 
                                unten);</li>
                                <li>die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
                                <li>ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu einem persönlichen 
                                Profil von Ihnen zu gelangen.</li>
                            </ul>
                        </li>
                        <li>Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir Daten richtig 
                        stellen müssen, falls Sie Fehler finden.</li>
                        <li>Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden"), was konkret bedeutet, dass 
                        Sie die Löschung Ihrer Daten verlangen dürfen.</li>
                        <li>Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet, dass wir die Daten 
                        nur mehr speichern dürfen aber nicht weiter verwenden.</li>
                        <li>Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir Ihnen auf Anfrage Ihre 
                        Daten in einem gängigen Format zur Verfügung stellen.</li>
                        <li>
                            Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung der Verarbeitung 
                            mit sich bringt.
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse, Ausübung 
                                öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können Sie gegen die 
                                Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem Widerspruch 
                                rechtlich nachkommen können.</li>
                                <li>Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese Art der 
                                Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing verwenden.</li>
                                <li>Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art der 
                                Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling verwenden.</li>
                            </ul>
                        </li>
                        <li>Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf einer automatisierten 
                        Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.</li>
                        <li>Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich jederzeit bei der 
                        Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen Daten 
                        gegen die DSGVO verstößt.</li>
                    </ul>
              
                </section>

                {/* Section 7 */}
                <section id="sicherheit" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Sicherheit der Datenverarbeitung</h2>
                    <p className="mb-4">
                        Um personenbezogene Daten zu schützen, haben wir sowohl technische als auch organisatorische Maßnahmen umgesetzt. Wo es 
                        uns möglich ist, verschlüsseln oder pseudonymisieren wir personenbezogene Daten. Dadurch machen wir es im Rahmen 
                        unserer Möglichkeiten so schwer wie möglich, dass Dritte aus unseren Daten auf persönliche Informationen schließen 
                        können.
                    </p>
                    <p>
                        Art. 25 DSGVO spricht hier von "Datenschutz durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen" 
                        und meint damit, dass man sowohl bei Software (z. B. Formularen) also auch Hardware (z. B. Zugang zum Serverraum) 
                        immer an Sicherheit denkt und entsprechende Maßnahmen setzt. Im Folgenden gehen wir, falls erforderlich, noch auf 
                        konkrete Maßnahmen ein.
                    </p>
                </section>

                {/* Section 8 - Cookies */}
                <section id="cookies" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Cookies</h2>
                    
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                        <h3 className="text-xl font-bold mb-3">Cookies Zusammenfassung</h3>
                        <p>👥 <strong>Betroffene:</strong> Besucher der Website</p>
                        <p>🤝 <strong>Zweck:</strong> abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim 
                        Hersteller der Software, der das Cookie setzt.</p>
                        <p>📓 <strong>Verarbeitete Daten:</strong> Abhängig vom jeweils eingesetzten Cookie. Mehr Details dazu finden Sie 
                        weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.</p>
                        <p>📅 <strong>Speicherdauer:</strong> abhängig vom jeweiligen Cookie, kann von Stunden bis hin zu Jahren variieren</p>
                        <p>⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO 
                        (Berechtigte Interessen)</p>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">Was sind Cookies?</h3>
                    <p className="mb-4">
                        Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern. Im Folgenden erklären wir, was Cookies 
                        sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.
                    </p>
                    <p className="mb-4">
                        Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, 
                        Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Websites speichern kleine Text-Dateien in Ihrem 
                        Browser. Diese Dateien nennt man Cookies.
                    </p>
                    <p className="mb-4">
                        Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Websites verwenden Cookies. 
                        Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt. 
                        HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien 
                        werden automatisch im Cookie-Ordner, quasi dem "Hirn" Ihres Browsers, untergebracht. Ein Cookie besteht aus einem 
                        Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.
                    </p>
                    <p className="mb-4">
                        Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn 
                        Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen" Informationen an unsere Seite zurück. 
                        Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen 
                        Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen 
                        Datei gespeichert.
                    </p>
                    <p className="mb-4">
                        Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer 
                        Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites (z.B. Google Analytics) erstellt. Jedes Cookie ist 
                        individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein 
                        paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder 
                        andere „Schädlinge". Cookies können auch nicht auf Informationen Ihres PCs zugreifen.
                    </p>

                    <h3 className="text-2xl font-bold mb-3 mt-6">Welche Arten von Cookies gibt es?</h3>
                    <p className="mb-4">
                        Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in den folgenden 
                        Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen Arten von 
                        HTTP-Cookies eingehen.
                    </p>
                    <p className="mb-4">Man kann 4 Arten von Cookies unterscheiden:</p>
                    
                    <div className="space-y-4 mb-6">
                        <div>
                            <h4 className="font-bold">Unerlässliche Cookies</h4>
                            <p>Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es diese 
                            Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst zur 
                            Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster 
                            schließt.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Zweckmäßige Cookies</h4>
                            <p>Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden 
                            mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Zielorientierte Cookies</h4>
                            <p>Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, 
                            Schriftgrößen oder Formulardaten gespeichert.</p>
                        </div>
                        <div>
                            <h4 className="font-bold">Werbe-Cookies</h4>
                            <p>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu 
                            liefern. Das kann sehr praktisch, aber auch sehr nervig sein.</p>
                        </div>
                    </div>

                    <p className="mb-4">
                        Üblicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser Cookiearten Sie zulassen möchten. 
                        Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.
                    </p>
                    <p className="mb-4">
                        Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen, empfehlen wir{' '}
                        <a 
                            href="https://datatracker.ietf.org/doc/html/rfc6265" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            https://datatracker.ietf.org/doc/html/rfc6265
                        </a>, dem Request for Comments der Internet Engineering Task Force (IETF) namens "HTTP State Management Mechanism".
                    </p>

                    <h3 className="text-2xl font-bold mb-3 mt-6">Widerspruchsrecht – wie kann ich Cookies löschen?</h3>
                    <p className="mb-4">
                        Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Website 
                        die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu deaktivieren oder nur teilweise zuzulassen. 
                        Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.
                    </p>
                    <p className="mb-4">
                        Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer 
                        informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das 
                        Cookie erlauben oder nicht.
                    </p>

                    <h3 className="text-2xl font-bold mb-3 mt-6">Rechtsgrundlage</h3>
                    <p className="mb-4">
                        Seit 2009 gibt es die sogenannten „Cookie-Richtlinien". Darin ist festgehalten, dass das Speichern von Cookies eine 
                        Einwilligung (Artikel 6 Abs. 1 lit. a DSGVO) von Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr 
                        unterschiedliche Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser Richtlinie in § 165 
                        Abs. 3 des Telekommunikationsgesetzes (2021). In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht 
                        umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs. 3 des Telemediengesetzes (TMG), 
                        welches seit Mai 2024 durch das Digitale-Dienste-Gesetz (DDG) ersetzt wurde.
                    </p>
                    <p className="mb-4">
                        Für unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt, bestehen berechtigte Interessen (Artikel 6 
                        Abs. 1 lit. f DSGVO), die in den meisten Fällen wirtschaftlicher Natur sind. Wir möchten den Besuchern der Website 
                        eine angenehme Benutzererfahrung bescheren und dafür sind bestimmte Cookies oft unbedingt notwendig.
                    </p>
                    <p>
                        Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle Ihrer Einwilligung. 
                        Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.
                    </p>
                </section>

                {/* Section 9 - Social Media */}
                <section id="social-media" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Social Media Einleitung</h2>
                    
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                        <h3 className="text-xl font-bold mb-3">Social Media Datenschutzerklärung Zusammenfassung</h3>
                        <p>👥 <strong>Betroffene:</strong> Besucher der Website</p>
                        <p>🤝 <strong>Zweck:</strong> Darstellung und Optimierung unserer Serviceleistung, Kontakt zu Besuchern, Interessenten 
                        u.a., Werbung</p>
                        <p>📓 <strong>Verarbeitete Daten:</strong> Daten wie etwa Telefonnummern, E-Mail-Adressen, Kontaktdaten, Daten zum 
                        Nutzerverhalten, Informationen zu Ihrem Gerät und Ihre IP-Adresse. Mehr Details dazu finden Sie beim jeweils 
                        eingesetzten Social-Media-Tool.</p>
                        <p>📅 <strong>Speicherdauer:</strong> abhängig von den verwendeten Social-Media-Plattformen</p>
                        <p>⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO 
                        (Berechtigte Interessen)</p>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">Was ist Social Media?</h3>
                    <p className="mb-4">
                        Zusätzlich zu unserer Website sind wir auch in diversen Social-Media-Plattformen aktiv. Dabei können Daten von Usern 
                        verarbeitet werden, damit wir gezielt User, die sich für uns interessieren, über die sozialen Netzwerke ansprechen 
                        können. Darüber hinaus können auch Elemente einer Social-Media-Plattform direkt in unsere Website eingebettet sein. Das 
                        ist etwa der Fall, wenn Sie einen sogenannten Social-Button auf unserer Website anklicken und direkt zu unserem 
                        Social-Media-Auftritt weitergeleitet werden. Als sogenannte Sozialen Medien oder Social Media werden Websites und Apps 
                        bezeichnet, über die angemeldete Mitglieder Inhalte produzieren, Inhalte offen oder in bestimmten Gruppen austauschen 
                        und sich mit anderen Mitgliedern vernetzen können.
                    </p>

                    <h3 className="text-2xl font-bold mb-3">Warum nutzen wir Social Media?</h3>
                    <p className="mb-4">
                        Seit Jahren sind Social-Media-Plattformen der Ort, wo Menschen online kommunizieren und in Kontakt treten. Mit unseren 
                        Social-Media-Auftritten können wir unsere Produkte und Dienstleistungen Interessenten näherbringen. Die auf unserer 
                        Website eingebundenen Social-Media-Elemente helfen Ihnen, schnell und ohne Komplikationen zu unseren 
                        Social-Media-Inhalten wechseln können.
                    </p>
                    <p className="mb-4">
                        Die Daten, die durch Ihre Nutzung eines Social-Media-Kanals gespeichert und verarbeitet werden, haben in erster Linie 
                        den Zweck, Webanalysen durchführen zu können. Ziel dieser Analysen ist es, genauere und personenbezogene Marketing- und 
                        Werbestrategien entwickeln zu können. Abhängig von Ihrem Verhalten auf einer Social-Media-Plattform, können mit Hilfe 
                        der ausgewerteten Daten, passende Rückschlüsse auf Ihre Interessen getroffen werden und sogenannte Userprofile erstellt 
                        werden. So ist es den Plattformen auch möglich, Ihnen maßgeschneiderte Werbeanzeigen zu präsentieren. Meistens werden 
                        für diesen Zweck Cookies in Ihrem Browser gesetzt, die Daten zu Ihrem Nutzungsverhalten speichern.
                    </p>
                    <p className="mb-4">
                        Wir gehen in der Regel davon aus, dass wir datenschutzrechtlich verantwortlich bleiben, auch wenn wir Dienste einer 
                        Social-Media-Plattform nutzen. Der Europäische Gerichtshof hat jedoch entschieden, dass in bestimmten Fällen der 
                        Betreiber der Social-Media-Plattform zusammen mit uns gemeinsam verantwortlich im Sinne des Art. 26 DSGVO sein kann. 
                        Soweit dies der Fall ist, weisen wir gesondert darauf hin und arbeiten auf Grundlage einer diesbezüglichen 
                        Vereinbarung. Das Wesentliche der Vereinbarung ist dann weiter unten bei der betroffenen Plattform wiedergegeben.
                    </p>
                    <p className="mb-4">
                        Bitte beachten Sie, dass bei der Nutzung der Social-Media-Plattformen oder unserer eingebauten Elemente auch Daten von 
                        Ihnen außerhalb der Europäischen Union verarbeitet werden können, da viele Social-Media-Kanäle, beispielsweise Facebook 
                        oder Twitter, amerikanische Unternehmen sind. Dadurch können Sie möglicherweise Ihre Rechte in Bezug auf Ihre 
                        personenbezogenen Daten nicht mehr so leicht einfordern bzw. durchsetzen.
                    </p>

                    <h3 className="text-2xl font-bold mb-3">Rechtsgrundlage</h3>
                    <p className="mb-4">
                        Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Social-Media-Elemente verarbeitet und gespeichert 
                        werden können, gilt diese Einwilligung als Rechtsgrundlage der Datenverarbeitung (Art. 6 Abs. 1 lit. a DSGVO). 
                        Grundsätzlich werden Ihre Daten bei Vorliegen einer Einwilligung auch auf Grundlage unseres berechtigten Interesses 
                        (Art. 6 Abs. 1 lit. f DSGVO) an einer schnellen und guten Kommunikation mit Ihnen oder anderen Kunden und 
                        Geschäftspartnern gespeichert und verarbeitet. Wir setzen die Tools gleichwohl nur ein, soweit Sie eine Einwilligung 
                        erteilt haben. Die meisten Social-Media-Plattformen setzen auch Cookies in Ihrem Browser, um Daten zu speichern. Darum 
                        empfehlen wir Ihnen, unseren Datenschutztext über Cookies genau durchzulesen und die Datenschutzerklärung oder die 
                        Cookie-Richtlinien des jeweiligen Dienstanbieters anzusehen.
                    </p>

                    {/* LinkedIn Section */}
                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">LinkedIn Datenschutzerklärung</h3>
                        
                        <div className="bg-blue-50 p-4 rounded mb-4">
                            <p>👥 <strong>Betroffene:</strong> Besucher der Website</p>
                            <p>🤝 <strong>Zweck:</strong> Optimierung unserer Serviceleistung</p>
                            <p>📓 <strong>Verarbeitete Daten:</strong> Daten wie etwa Daten zum Nutzerverhalten, Informationen zu Ihrem Gerät 
                            und Ihre IP-Adresse.</p>
                            <p>📅 <strong>Speicherdauer:</strong> die Daten werden grundsätzlich innerhalb von 30 Tagen gelöscht</p>
                            <p>⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO 
                            (Berechtigte Interessen)</p>
                        </div>

                        <h4 className="text-xl font-bold mb-3">Was ist LinkedIn?</h4>
                        <p className="mb-4">
                            Wir nutzen auf unserer Webseite Social-Plug-ins des Social-Media-Netzwerks LinkedIn, der Firma LinkedIn Corporation, 
                            2029 Stierlin Court, Mountain View, CA 94043, USA. Bei den Social-Plug-ins kann es sich um Feeds, das Teilen von 
                            Inhalten oder um die Verlinkung zu unserer LinkedIn-Seite handeln. Die Social-Plug-ins sind eindeutig mit dem 
                            bekannten LinkedIn-Logo gekennzeichnet und erlauben beispielsweise interessante Inhalte direkt über unsere Webseite 
                            zu teilen. Für den Europäischen Wirtschaftsraum und die Schweiz ist die Firma LinkedIn Ireland Unlimited Company 
                            Wilton Place in Dublin für die Datenverarbeitung verantwortlich.
                        </p>
                        <p className="mb-4">
                            LinkedIn ist das größte soziale Netzwerk für Geschäftskontakte. Anders als beispielsweise bei Facebook konzentriert 
                            sich das Unternehmen ausschließlich auf den Aufbau geschäftlicher Kontakte. Unternehmen können auf der Plattform 
                            Dienstleistungen und Produkte vorstellen und Geschäftsbeziehungen knüpfen. Viele Menschen verwenden LinkedIn auch 
                            für die Jobsuche oder um selbst geeignete Mitarbeiter oder Mitarbeiterinnen für die eigene Firma zu finden.
                        </p>

                        <h4 className="text-xl font-bold mb-3 mt-4">Rechtsgrundlage</h4>
                        <p className="mb-4">
                            Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Social-Media-Elemente verarbeitet und 
                            gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der Datenverarbeitung (Art. 6 Abs. 1 lit. a 
                            DSGVO). Grundsätzlich werden Ihre Daten auch auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f 
                            DSGVO) an einer schnellen und guten Kommunikation mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert 
                            und verarbeitet.
                        </p>
                        <p className="mb-4">
                            LinkedIn verarbeitet Daten von Ihnen u.a. auch in den USA. LinkedIn ist aktiver Teilnehmer des EU-US Data Privacy 
                            Frameworks, wodurch der korrekte und sichere Datentransfer personenbezogener Daten von EU-Bürgern in die USA 
                            geregelt wird. Mehr Informationen dazu finden Sie auf{' '}
                            <a 
                                href="https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en
                            </a>.
                        </p>
                        <p className="mb-4">
                            Zudem verwendet LinkedIn sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln 
                            (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen 
                            sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer 
                            (wie beispielsweise in die USA) überliefert und dort gespeichert werden.
                        </p>
                        <p>
                            Wir haben versucht, Ihnen die wichtigsten Informationen über die Datenverarbeitung durch LinkedIn näherzubringen. Auf{' '}
                            <a 
                                href="https://www.linkedin.com/legal/privacy-policy" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                https://www.linkedin.com/legal/privacy-policy
                            </a>{' '}
                            erfahren Sie noch mehr über die Datenverarbeitung des Social-Media-Netzwerks LinkedIn.
                        </p>
                    </div>
                </section>

                {/* Section 10 - Begriffe */}
                <section id="begriffe" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Erklärung verwendeter Begriffe</h2>
                    <p className="mb-6">
                        Wir sind stets bemüht unsere Datenschutzerklärung so klar und verständlich wie möglich zu verfassen. Besonders bei 
                        technischen und rechtlichen Themen ist das allerdings nicht immer ganz einfach. Es macht oft Sinn juristische Begriffe 
                        (wie z. B. personenbezogene Daten) oder bestimmte technische Ausdrücke (wie z. B. Cookies, IP-Adresse) zu verwenden. 
                        Wir möchte diese aber nicht ohne Erklärung verwenden. Nachfolgend finden Sie nun eine alphabetische Liste von wichtigen 
                        verwendeten Begriffen, auf die wir in der bisherigen Datenschutzerklärung vielleicht noch nicht ausreichend eingegangen 
                        sind.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Auftragsverarbeiter</h3>
                            <p className="mb-2"><em>Begriffsbestimmung nach Artikel 4 der DSGVO</em></p>
                            <p className="mb-2">
                                Im Sinne dieser Verordnung bezeichnet der Ausdruck „Auftragsverarbeiter" eine natürliche oder juristische Person, 
                                Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
                            </p>
                            <p>
                                <strong>Erläuterung:</strong> Wir sind als Unternehmen und Websiteinhaber für alle Daten, die wir von Ihnen 
                                verarbeiten verantwortlich. Neben den Verantwortlichen kann es auch sogenannte Auftragsverarbeiter geben. Dazu 
                                zählt jedes Unternehmen bzw. jede Person, die in unserem Auftrag personenbezogene Daten verarbeitet.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Einwilligung</h3>
                            <p className="mb-2"><em>Begriffsbestimmung nach Artikel 4 der DSGVO</em></p>
                            <p className="mb-2">
                                Im Sinne dieser Verordnung bezeichnet der Ausdruck „Einwilligung" der betroffenen Person jede freiwillig für den 
                                bestimmten Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung 
                                oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie 
                                mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.
                            </p>
                            <p>
                                <strong>Erläuterung:</strong> In der Regel erfolgt bei Websites eine solche Einwilligung über ein 
                                Cookie-Consent-Tool. Sie kennen das bestimmt. Immer wenn Sie erstmals eine Website besuchen, werden Sie meist über 
                                einen Banner gefragt, ob Sie der Datenverarbeitung zustimmen bzw. einwilligen.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Personenbezogene Daten</h3>
                            <p className="mb-2"><em>Begriffsbestimmung nach Artikel 4 der DSGVO</em></p>
                            <p className="mb-2">
                                Im Sinne dieser Verordnung bezeichnet der Ausdruck „personenbezogene Daten" alle Informationen, die sich auf eine 
                                identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person") beziehen.
                            </p>
                            <p className="mb-2">
                                <strong>Erläuterung:</strong> Personenbezogene Daten sind also all jene Daten, die Sie als Person identifizieren 
                                können. Das sind in der Regel Daten wie etwa:
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Name</li>
                                <li>Adresse</li>
                                <li>E-Mail-Adresse</li>
                                <li>Post-Anschrift</li>
                                <li>Telefonnummer</li>
                                <li>Geburtsdatum</li>
                                <li>Kennnummern wie Sozialversicherungsnummer, Steueridentifikationsnummer, Personalausweisnummer oder 
                                Matrikelnummer</li>
                                <li>Bankdaten wie Kontonummer, Kreditinformationen, Kontostände uvm.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Profiling</h3>
                            <p className="mb-2"><em>Begriffsbestimmung nach Artikel 4 der DSGVO</em></p>
                            <p className="mb-2">
                                Im Sinne dieser Verordnung bezeichnet der Ausdruck „Profiling" jede Art der automatisierten Verarbeitung 
                                personenbezogener Daten, die darin besteht, dass diese personenbezogenen Daten verwendet werden, um bestimmte 
                                persönliche Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten.
                            </p>
                            <p>
                                <strong>Erläuterung:</strong> Beim Profiling werden verschiedene Informationen über eine Person zusammengetragen, 
                                um daraus mehr über diese Person zu erfahren. Im Webbereich wird Profiling häufig für Werbezwecke oder auch für 
                                Bonitätsprüfungen angewandt.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Verantwortlicher</h3>
                            <p className="mb-2"><em>Begriffsbestimmung nach Artikel 4 der DSGVO</em></p>
                            <p className="mb-2">
                                Im Sinne dieser Verordnung bezeichnet der Ausdruck „Verantwortlicher" die natürliche oder juristische Person, 
                                Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der 
                                Verarbeitung von personenbezogenen Daten entscheidet.
                            </p>
                            <p>
                                <strong>Erläuterung:</strong> In unserem Fall sind wir für die Verarbeitung Ihrer personenbezogenen Daten 
                                verantwortlich und folglich der "Verantwortliche". Wenn wir erhobene Daten zur Verarbeitung an andere Dienstleister 
                                weitergeben, sind diese "Auftragsverarbeiter".
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Verarbeitung</h3>
                            <p className="mb-2"><em>Begriffsbestimmung nach Artikel 4 der DSGVO</em></p>
                            <p className="mb-2">
                                Im Sinne dieser Verordnung bezeichnet der Ausdruck „Verarbeitung" jeden mit oder ohne Hilfe automatisierter 
                                Verfahren ausgeführten Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten wie das 
                                Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, 
                                das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der 
                                Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
                            </p>
                            <p>
                                <strong>Anmerkung:</strong> Wenn wir in unserer Datenschutzerklärung von Verarbeitung sprechen, meinen wir damit 
                                jegliche Art von Datenverarbeitung. Dazu zählt, wie oben in der originalen DSGVO-Erklärung erwähnt, nicht nur das 
                                Erheben sondern auch das Speichern und Verarbeiten von Daten.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 11 - Schlusswort */}
                <section id="schlusswort" className="mb-12 scroll-mt-32">
                    <h2 className="text-3xl font-bold mb-4">Schlusswort</h2>
                    <p className="mb-4">
                        Herzlichen Glückwunsch! Wenn Sie diese Zeilen lesen, haben Sie sich wirklich durch unsere gesamte Datenschutzerklärung 
                        „gekämpft" oder zumindest bis hier hin gescrollt. Wie Sie am Umfang unserer Datenschutzerklärung sehen, nehmen wir den 
                        Schutz Ihrer persönlichen Daten, alles andere als auf die leichte Schulter.
                    </p>
                    <p className="mb-4">
                        Uns ist es wichtig, Sie nach bestem Wissen und Gewissen über die Verarbeitung personenbezogener Daten zu informieren. 
                        Dabei wollen wir Ihnen aber nicht nur mitteilen, welche Daten verarbeitet werden, sondern auch die Beweggründe für die 
                        Verwendung diverser Softwareprogramme näherbringen. In der Regel klingen Datenschutzerklärung sehr technisch und 
                        juristisch. Da die meisten von Ihnen aber keine Webentwickler oder Juristen sind, wollten wir auch sprachlich einen 
                        anderen Weg gehen und den Sachverhalt in einfacher und klarer Sprache erklären. Immer ist dies natürlich aufgrund der 
                        Thematik nicht möglich. Daher werden die wichtigsten Begriffe am Ende der Datenschutzerklärung näher erläutert.
                    </p>
                    <p className="mb-4">
                        Bei Fragen zum Thema Datenschutz auf unserer Website zögern Sie bitte nicht, uns oder die verantwortliche Stelle zu 
                        kontaktieren. Wir wünschen Ihnen noch eine schöne Zeit und hoffen, Sie auf unserer Website bald wieder begrüßen zu 
                        dürfen.
                    </p>
                    <p className="text-sm text-gray-600 mt-8">
                        Alle Texte sind urheberrechtlich geschützt.
                    </p>
                </section>
            </div>
        </div>
    );
}
