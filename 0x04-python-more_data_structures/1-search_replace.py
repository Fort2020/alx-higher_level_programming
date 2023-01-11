#!/usr/bin/python3
def search_replace(my_list, search, replace):
    if not my_list:
        print()
    return [find if find != search else replace for find in my_list]
