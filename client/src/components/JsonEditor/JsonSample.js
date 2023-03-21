const SampleJson = {
  pat_problem_id: 111,
  asset_id: 433,
  pat_json_modified: "testing asdf qwerty modified",
  pat_json: {
    id: "598",
    body: {
      problem: [
        {
          id: 513,
          stem: {
            text: "<p><span>Drag tiles to complete the statements.</span></p>",
            audio: {
              audiofile:
                "audio/en_US/sz/block16/baa507b1fae5cc90f681ddeaaf407f5a.mp3",
            },
          },
          tile: [
            {
              id: "A",
              text: "<span>20</span>",
              correct: "true",
            },
            {
              id: "B",
              text: "<span>−30</span>",
              correct: "true",
            },
          ],
          type: "TilePoolTemplate",
          layout: "tilePoolLayout3",
          stimulus: {
            art: {
              image:
                "images/en_US/sz/block16/86a9fd92f0d9c1a68e3f1ef710a8d5f2.png",
              width: 433,
              height: 420,
              altText:
                "A four-quadrant graph. The horizontal axis is labeled x and the vertical axis is labeled y. Grid lines on the x-axis are labeled every 5 from negative 20 to positive 20. Grid lines on the y-axis are labeled every 5 from negative 20 to positive 20. A line is graphed that starts in the second quadrant, decreases, goes through the x-axis where x = negative 5, continues through the third quadrant, goes through the x-axis at a point between the first and second grid lines below the origin, and continues into the fourth quadrant. There are two points on the line. Point A is at negative 15 comma 15. Point B is at 5 comma negative 15.",
            },
          },
          placement: "Matters",
          statement: {
            text: '<p/><p><span>The change in </span><span italic="true">x</span><span> from point A to point B is  </span><tilepool stamp="0"/><span>.</span></p><p/><p><span>The change in </span><span italic="true">y</span><span> from point A to point B is  </span><tilepool stamp="1"/><span>.</span></p><p/><p><span>The slope of the line is  </span><tilepool stamp="2"/><span>.</span></p><p/><p/><p/>',
          },
          pointValue: 200,
        },
      ],
    },
    type: "TilePoolTemplate",
  },
};

export default SampleJson;
