function Showtime()
    {
        let date = new Date();
        let time = date.toLocaleDateString();
        console.log(time);
    }

setTimeout(Showtime,500);
