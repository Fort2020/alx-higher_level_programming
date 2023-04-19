#!/usr/bin/python3
"""
This script creates the State
“California” with the City “San Francisco” from the database hbtn_0e_100_usa
"""
import sys
from relationship_city import City
from relationship_state import State, Base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine


def fetch_all():
    username = sys.argv[1]
    password = sys.argv[2]
    db_name = sys.argv[3]
    engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format(
        username, password, db_name), pool_pre_ping=True)

    Base.metadata.create_all(engine)

    session = Session(engine)
    new_state = State(name="California")
    new_city = City(name="San Francisco")
    # appending the city
    new_state.cities.append(new_city)

    session.add(new_state)
    session.add(new_city)
    session.commit()
    session.close()


if __name__ == "__main__":
    fetch_all()
