// worker.js
self.onmessage = (event) => {
    const { bubbles, meteors } = event.data;

    const newBubbles = bubbles.map(bubble => {
        return {
            ...bubble,
            x: bubble.x + bubble.vx,
            y: bubble.y + bubble.vy
        };
    });

    const newMeteors = meteors.map(meteor => {
        if (meteor.direction === 'horizontal') {
            meteor.x += meteor.speed;
            if (meteor.x > self.innerWidth) {
                meteor.x = 0;
                meteor.y = Math.floor(Math.random() * (self.innerHeight / 50)) * 50;
            }
        } else {
            meteor.y += meteor.speed;
            if (meteor.y > self.innerHeight) {
                meteor.y = 0;
                meteor.x = Math.floor(Math.random() * (self.innerWidth / 50)) * 50;
            }
        }
        return meteor;
    });

    self.postMessage({ bubbles: newBubbles, meteors: newMeteors });
};
