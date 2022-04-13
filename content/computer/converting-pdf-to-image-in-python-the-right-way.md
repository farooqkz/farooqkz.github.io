---
title: "Converting PDF to Image in Python(the Right Way)"
date: 2022-04-13T19:00:32+04:30
draft: false
---

If you use your favorite search engine to learn how to "convert pdf to image" in Python, you will find many websites like [GeeksforGeeks](https://www.geeksforgeeks.org/convert-pdf-to-image-using-python/) introducing [pdf2image](https://pypi.org/project/pdf2image/) to accomplish this goal.

As you can in pdf2image's PyPI page, it is just a wrapper around [pdftoppm](https://manpage.me/?q=pdftoppm) while `pdftoppm` itself is part of poppler. Basically, pdf2image module invokes `pdftoppm` with [subprocess](https://docs.python.org/3/library/subprocess.html) Python standard module which is for invoking subprocesses, controling them and capturing their output all from Python.

So I was wondering, why not use the poppler C++ library itself to convert PDF file to Image?

After some searching in [PyPI](https://pypi.org) I've found [python-poppler](https://pypi.org/project/python-poppler/) which is a wrapper around poppler C++ library which is for reading PDF files, extracting text from them and converting their pages to image file formats.

Here I want to teach you how to use poppler from Python to convert the first page of a PDF to Image and save it somewhere in your `/tmp/`.

The zeroth step as always is installing the library:

```
pip3 install python-poppler --user
```

python-poppler relies on poppler C++ library to function and is just a wrapper for that so you need to install it as well. Here I assume you already have it installed on your computer. But in the case it isn't, you will find pip3 cursing you with errors!

The first step is, of course, firing up the Python(3) thing and importing `load_from_file` and `PageRenderer`:

```
Python 3.8.10 (default, Mar 15 2022, 12:22:08) 
[GCC 9.4.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from poppler import load_from_file, PageRenderer
>>> 
```

`load_from_file` is used to load a PDF file from filesystem as it sounds.
 And `PageRenderer` is used to render a page of some PDF document into an image.

In the case you need to load the PDF from bytes(e.g. when you are receiving it from network such as a web API which receives data from its clients) you must go with `load_from_data`, instead(See [here](https://cbrunet.net/python-poppler/api/poppler.html#module-poppler)).

Next you must load the PDF file with its name:

```
>>> document = load_from_file("probability_cheatsheet.pdf")
```

Now `document` is a [Document](https://cbrunet.net/python-poppler/usage.html#working-with-documents) object with which you can read its title or number of pages and many other properties:

```
>>> document.pages
10
>>> document.page_layout
<page_layout_enum.no_layout: 0>
>>> document.page_mode
<page_mode_enum.use_outlines: 1>
>>> document.producer
'pdfTeX-1.40.14'
```

Next, you can create an instance of `PageRenderer` and create an image of the first page:

```
>>> renderer = PageRenderer()
>>> page1 = document.create_page(0)
>>> renderer.
>>> img = renderer.render_page(page1)
>>> img
<poppler.image.Image object at 0x7f3652f44310>
```

Now it is time to save the image as PNG:

```
>>> img.save("/tmp/pc.png", out_format="png")
True
```

And voila! You've done that!
