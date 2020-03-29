# Hack The Crisis 2020 - Austria
**"We automate the Corona health hotline!"**

This code was created during the *Hack-The-Crisis 2020 - Austria* Hackathon.

# Introduction Video
[TODO]()

# Team
* Nora (*anything*)
* Andreas (*dev*)
* Josef (*dev*)
* Tobias (*dev*)
* Matthias (*concept & support*)

# Problem
During a crisis as "Corona," people worry a lot about their health and needless to say have many questions. Above all, they want to check their symptoms and eventually get tested. In Austria, that's where the main health-hotline *1450* comes in hand. 

Unfortunately, the last weeks have shown that the capacity of the hotline is simply not designed for such a major outbreak. This leads to a frequently overloaded hotline.

# Solution
Our solution is a smart answering machine, which can be connected to the hotline. It responds naturally to the callers questions and deals with common problems, such as FAQ and a self-diagnose test.

After completing the self-test, the user gets further information and precautions. Only the most urgent cases are forwarded to the real hotline.


# Demo
We started from scratch with the new idea and implemented a fully functional demo that is available through a test phone number.

The demo includes the self-diagnose test and can answer around 20 different FAQ. It is easily expandable and open to new features.


# Technical Concept
The solution consists of three parts.

The phone call is handled by [Voximplant](https://voximplant.com/), a cloud communications platform provider. Furthermore, the voice input is handled and transformed by [Dialogflow](https://dialogflow.com/), a natural language processing software that utilized advanced machine-learning. Finally our custom backend function, developed in [Node.js](https://nodejs.org/), responds to the input and routes the answer back to the user.

# Outline
TODO, Hackathon result & next steps
