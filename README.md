littlescripts
=============
A bunch of unrelated scripts that are too tiny to merit their own repository.

##applescript
###better_volume_down
Some moron at Apple decided that pressing the volume down key on a Mac should unmute it. This script makes it a little better by immediately re-muting your Mac.

##batch
###compile_run_java.bat
Allows you to compile / run Java code without installing a clunky IDE. Lots of frilly bits on this one; it was more of an exploration of batch than a pure utility script.
###printer_reset.bat
Ah, Windows printers. This script clears and resets your spooler, which kicks the ass of any jobs stuck in the queue. Voted as Mom's Favorite, 2008.
###ie_prank.bat
In an attempt to convince my housemate to move off of Internet Explorer 7, I pointed all of his IE shortcuts to this script. It switches your right and left mouse buttons before launching IE. Muhahah.

##javascript
###wrap_selects
Places <select> elements on the page into wrappers, which is a good first step for styling them. I can't *wait* until we can do away with this once & for all, but for now it's still a necessary evil.
###sticky_footer (in multi-page PDF)
While using [wkhtmltopdf-0.11.0-rc1 osx](https://code.google.com/p/wkhtmltopdf/) to convert HTML -> PDF, I needed a way to stick some text at the very bottom of the last page, regardless of main content length. This ugly beast should do the trick (example project included).

Run with:
```bash
./wkhtmltopdf --footer-html /wherever/footer.html --footer-spacing -5.5 /wherever/main.html /wherever/thisgetsprinted.pdf
```

##python
###random_english_word
Prints out 8 random English words from an array. Comments indicate how the array was obtained.
