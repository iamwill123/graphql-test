import sqlite3 from 'sqlite3';
import * as tables from './tables';

export const db = new sqlite3.Database('./db.sqlite');

export const getSql = query => {
  return new Promise((resolve, reject) => {
    console.log('getSql: text', query.text);
    console.log('getSql: values', query.values);
    db.all(query.text, query.values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
