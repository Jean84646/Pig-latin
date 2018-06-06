# Pig-Latin

##### A little program that translate English to Pig-Latin.

#### By Anousone Kaseumsouk and Lan Dam

## Description

This application takes allows a user to enter an English sentence and transelate it to Pig-Latin.

## Setup

Install Pig-Latin by cloning this repository.

## Technologies Used

Application: JavaScript and jQuery-3.3.1

## Spec

* The application does nothing to non-alphabetical characters, since they do not contain consonant or vowel.
* The program adds "ay" to single-letter words beginning with a vowel.
* For words beginning with a vowel, add "way" to the end.
* For words beginning with one or more consonants, move all of the first consecutive constants to the end, and add "ay".
* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
* For words beginning with "y", treat "y" as a consonant.

| Input         | Expected Output|
| ------------- |-------------   |
| 123           | 123            |
| i             | iay            |
| always        | alwaysway      |
| pig latin     | igpay atinlay  |
| squeal        | ealsquay       |
| yesterday     | esterdayyay    |


### Legal

Copyright (c) 2018 **Anousone Kaseumsouk & Lan Dam**

This software is licensed under the MIT license.
