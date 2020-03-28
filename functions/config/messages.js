const messages = {
    'de': {
        translation: {
            'WELCOME': 'Willkommen bei der Corona Gesundsheitsnummer. Haben Sie allgemeine Fragen, einen Verdacht auf Infektion oder sind Sie unter ärztlich verordneter Quarantäne?',
            'FALLBACK': 'Entschuldigung, das habe ich leider nicht verstanden. Sagen Sie \'verbinden\', um direkt mit der Gesundsheitsnummer verbunden zu werden.',
            'FALLBACK_UNKNOWN': 'Bitten antworten Sie mit Ja oder Nein.',
            'HELP': 'Haben Sie allgemeine Fragen, einen Verdacht auf Infektion oder sind Sie unter Quarantäne? Sagen Sie \'verbinden\', um direkt mit der Gesundsheitsnummer verbunden zu werden.',
            'FAQ_DANGER_ZONE': 'Zu den Risikogebieten in Österreich zählen aktuell: Tirol, in Vorarlberg die Gemeinden Lech, Zürs, Stuben, Warth und Schröcken und in Kärnten die Gemeinde Heiligenblut. Die vollständige Liste der internationalen Risikogebiete finden Sie im Internet auf tirol<say-as interpret-as="verbatim">.gv.at</say-as>.',
            'FAQ_PREGNANT': 'Derzeit ergeben sich keine Hinweise, dass Schwangere durch eine Covid-19-Erkrankung mehr gefährdet sind als andere Personen: Bisherige Erfahrungen zeigen, dass Schwangere im Falle einer Erkrankung nur leichte bis mittelschwere Symptome aufweisen.',
            'FAQ_FOOD': 'Auf Basis bisheriger Risikobewertungen ist eine Übertragung des Virus über Lebensmittel nicht möglich. Das bedeutet die Lebensmittel in Österreich sind sicher.',
            'FAQ_TEST_ANIMALS': 'Derzeit gibt es keine speziellen Tests für Tiere, da nach aktuellen Kenntnissen Haustiere nicht erkranken bzw. Menschen infizieren können.',
            'FAQ_INFECTED_ANIMALS': 'Es gibt aktuell keine Hinweise, dass Haustiere erkranken können bzw. Menschen infizieren.',
            'FAQ_RISKGROUP': 'Als Risikogruppe gelten Menschen über 65 Jahre sowie Personen mit chronischen Vorerkrankungen jeden Alters. Diese Gruppe schließt auch jüngere Menschen ein. Unabhängig vom Alter steigt für Personen mit Lungenerkrankungen und chronischen Vorerkrankungen die Wahrscheinlichkeit einer Erkrankung mit schwerem Verlauf.',
            'FAQ_ACTIVITY': 'Es sind alle Aktivitäten im Freien erlaubt, sofern diese mit Personen ausgeübt werden, die im gemeinsamen Haushalt leben und dabei gegenüber anderen Personen ein Abstand von mindestens einem Meter eingehalten wird. Es gibt keine zeitliche Begrenzung für die Ausübung dieser Aktivitäten.',
            'FAQ_CORONA_TEST': 'Getestet werden aktuell nur Verdachtsfälle mit akuten Symptomen. Für die Selbstdiagnose fragen Sie bitte nach \'Verdacht auf Infektion\'.',
            'FAQ_CORONA_TEST_NO_S': 'Wenn man Personen testet, die nicht symptomatisch sind, sagt ein negativer Test nichts aus, denn die Person kann sich in der Inkubationszeit von 14 Tagen befinden.',
            'FAQ_CORONA_TEST_COSTS': 'Bei Vorliegen eines begründeten Verdachtsfalles einer Infektion mit dem SARS-Cov-2 Virus werden die Kosten der Testung übernommen.',
            'FAQ_TREATMENT': 'Es gibt keinen Impfstoff. Die Behandlung erfolgt symptomatisch, das heißt durch Linderung der Krankheitsbeschwerden wie zum Beispiel durch Gabe fiebersenkender Mittel.',
            'FAQ_EVENTS': 'Jegliche Art von Veranstaltungen dürfen derzeit nicht durchgeführt werden. Ab dem 16. März 2020 gilt ein Versammlungsverbot. Spiel- und Sportplätze sind zu schließen, der Sportbetrieb ist einzustellen.',
            'FAQ_EMPLOYMENT': 'Die Corona Kurzarbeit ist ein neue, erleichterte Form der Kurzarbeit. Weitere Informationen zur Kurzarbeit und anderen Arbeitsrechtlichen Fragen finden Sie auf der Website des Bundesministerium für Arbeit, Familie und Jugend.',
            'FAQ_REGULATIONS': 'Um die Ausbreitung des neuartigen Coronavirus einzudämmen und die Bevölkerung zu schützen, müssen für die entsprechenden Maßnahmen die rechtlichen Voraussetzungen geschaffen werden. Bisher wurden dafür von Bund und Ländern verschiedene Gesetze, Verordnungen und Erlässe verabschiedet. Eine Zusammenfassung finden Sie auf der Website des Sozialministeriums.',
            'FAQ_BORDER': 'Zur Eindämmung der Verbreitung des Corona-Virus wurden durch das Bundesministerium für Inneres Grenzkontrollen eingeführt. Eine Einreise nach Österreich ist ausnahmslos nur noch an bestimmten Grenzübergängen erlaubt. Personen, die nach Österreich einreisen wollen, haben ein ärztliches Zeugnis über ihren Gesundheitszustand mit sich zu führen. Weitere Informationen zur Einreise findet sich unter <say-as interpret-as="verbatim">bmi.gv.at</say-as>.',
            'FAQ_MASKS': 'Zum jetzigen Zeitpunkt wird das Tragen von Hygiene- bzw. Atemschutzmasken für die gesunde Allgemeinbevölkerung nicht empfohlen. Die wichtigsten und effektivsten Maßnahmen zum persönlichen Schutz sowie zum Schutz von anderen Personen vor der Ansteckung sind eine gute Händehygiene, korrekte Hustenetikette und das Einhalten des Mindestabstandes von ca. 1 bis 2 Metern.',
            'FAQ_CLOSE_CONTACT': 'Enger Kontakt ist definiert als direkter, physischer Kontakt, Kontakt von Angesicht zu Angesicht mit einer Dauer von über 15 min und einem Abstand von unter 2 Meter. Außerdem ein Aufenthalt im selben geschlossenen Raum mit einer Dauer von über 15 min und einem Abstand von unter 2 Meter.',
            'TEST_INTRO': 'Für den Corona Selbsttest, beantworten sie bitte die folgenden Fragen gewissenhaft.',
            'TEST_0': 'Waren Sie in den letzten 14 Tagen in einem Risikogebiet?',
            'TEST_1': 'Waren Sie in den letzten 14 Tagen in Kontakt mit einem bestätigten Krankheitsfall?',
            'TEST_2': 'Haben Sie Fieber über 38°C?',
            'TEST_3': 'Haben Sie trockenen Husten?',
            'TEST_4': 'Haben Sie Atemschwierigkeiten bzw. Kurzatmigkeit?',
            'UNHEALTHY': 'Sie könnten eine Infektion mit dem Corona-Virus haben. Es ist daher vorgesehen Sie weiter zu untersuchen, um eine Infektion ausschließen zu können. Wir leiten sie jetzt an die zuständige Stelle weiter. Bitte warten. Die Demo endet hier.',
            'RISK': 'Sie könnten eine Infektion mit dem Corona-Virus haben. Melden Sie sich bitte umgehend mit dem persönlichen Code 4-2-1-7 bei der nächsten Teststelle. Wenn Sie keine weiteren Fragen haben, legen Sie bitte einfach auf.',
            'HEALTHY': 'Sie scheine keine Infektion mit dem Corona-Virus zu haben. Bitte beachten Sie die Regeln der verlautbarten Quarantäne-Verordnungen! Wenn Sie keine weiteren Fragen haben, legen Sie bitte einfach auf.',
            'QUARANTINE': 'Zur Erfassung ihrer aktuellen Daten leiten wir sie an die zuständige Stelle weiter. Bitte warten. Die Demo endet hier.',
            'FAQ_INTRO': 'Bei welcher Frage kann ich helfen?',
            'CONNECT_HOTLINE': 'Wir leiten Sie jetzt an die Gesundsheitsnummer weiter. Bitte warten. Die Demo endet hier.',
            'MORE_QUESTIONS': ' Haben Sie weitere Fragen, einen Verdacht auf Infektion oder sind Sie unter Quarantäne?',
            'NO_FINISH': 'Wenn Sie keine weiteren Fragen haben, legen Sie einfach auf.'
        }
    }
};

module.exports = messages;