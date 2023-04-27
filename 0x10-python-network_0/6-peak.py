#!/usr/bin/python3
"""a function that finds a peak in a list of unsorted integers"""


def find_peak(list_of_integers):
    """finds a peak in a list of unsorted integers"""
    if list_of_integers == []:
        return None

    length = len(list_of_integers)
    l = int(length / 2)
    i = list_of_integers

    if l - 1 < 0 and l + 1 >= length:
        return i[l]
    elif l - 1 < 0:
        return i[l] if i[l] > i[l + 1] else i[l + 1]
    elif l + 1 >= length:
        return i[l] if i[l] > i[l - 1] else i[l - 1]

    if i[l - 1] < i[l] > i[l + 1]:
        return i[l]

    if i[l + 1] > i[l - 1]:
        return find_peak(i[l:])
    return find_peak(i[:l])
