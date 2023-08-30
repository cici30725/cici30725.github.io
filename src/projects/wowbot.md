---
title: PixelGrinder
date: 2023-04-05
lead: A World of Warcraft bot based on reading pixel values
topics: ["Swift", "OpenCV"]
image: wowbot.png
---
*PixelGrinder* is a World of Warcraft bot written in Swift that aims to automate most part of the game, including griding, gathering and questing.

The bots decision making is driven by reading pixel values from the game screen, which is how we humans play the game, instead of reading/writing the game process's memory.
This is a safer way to bot since the bot has the same amount of information about the game as normal humans do.

The game screen is analyzed using OpenCV, an computer vision library, for non-trivial tasks. For example, finding  valid targets to attack and loot use image segmentation in color spaces.

**Links: [Demo](https://www.youtube.com/watch?v=czi4F4lekf4)**

