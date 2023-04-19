#!/usr/bin/python3
"""a Python file similar to model_state.py named model_city.py
that contains the class definition of a City
"""
import sys
from model_city import City
from model_state import Base, State
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
    for state, city in session.query(State, City)\
            .filter(City.state_id == State.id).order_by(City.id).all():
        print("{}: ({}) {}".format(state.name, city.id, city.name))
    session.close()


if __name__ == "__main__":
    fetch_all()
