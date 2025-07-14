---
title: "How to run something periodically in Minetest"
date: 2024-05-04T19:47:13+03:30
draft: false
category: Computing
---

This is a quick note to show how to run something periodically in Minetest. What you want to use
is `globalstep`. With `minetest.register_globalstep(function(dtime))` you can run a function every step of the server
which is usually 0.1

To achieve this goal, you need a variable to watch over time, decrease or increase it on every call of the globalstep and
finally when it reaches some condition, execute the actual code. It will be something like:

```lua
local timer = 60
minetest.register_globalstep(function(dtime)
    timer = timer - dtime
    if timer == 0.0 then
        minetest.chat_send_all("a minute has passed!")
        timer = 60
    end
end)
```
