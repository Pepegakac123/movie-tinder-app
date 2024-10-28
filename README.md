# Movie Tinder App

W projekcie nie zostało uwzględnione testowanie przy użyciu Jest-a. Nie jestem zaznajomiony z tą biblioteką i procesem testowania, a ze względu na brak odpowiedniej ilości czasu z poodów nieprzewidzianych nie zdążyłem nauczyć się jej w sposób zadowalający, nie chciałem równiez korzystać w 100 procentach z pomocy AI, aby napisało mi kod używający Jest-a o którym nie mam zielonego pojęcia.

# Default Swiping flow

1. The fetchMovies func simulate the api get call using axios, send data is being validated not only by typescript but also with the help of zod library. After data fetch the loading state disappears and the cards are being shown
2. 	User click on the button (controlpanel).
3.	Context (context/index.ts)  get actualised (triggerSwipeAnimation)
4. 	MovieCard reacts to change of the (swipeAnimation) state because of useEffect
5. 	Animation is being played
6. 	HandleSwipe func simulate the put call and deletes thea car
7. 	After animation the card is deleted(handleSwipe) and the (swipeanimation) state is resetting

To apply swipe animation and user dragg effect I used framerMotion

Link to the website: [(https://tinder-movie-app.kacperadamczyk.pl/)]
