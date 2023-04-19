#!/usr/bin/python3
"""
This script lists all State objects, and corresponding City objects,
contained in the database hbtn_0e_101_usa
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

    rows = session.query(State).order_by(State.id).all()
    for state_row in rows:
        print("{}: {}".format(state_row.id, state_row.name))
        for city_row in state_row.cities:
            print("    {}: {}".format(city_row.id, city_row.name))
    session.close()


if __name__ == "__main__":
    fetch_all()
