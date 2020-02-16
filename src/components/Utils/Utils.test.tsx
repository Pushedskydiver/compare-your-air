import { calcLastUpdated, formatDate } from './Utils';

describe('Format date of last updated data', () => {
  it('should return object of time since the last update', () => {
    const current = new Date('2020-02-15T10:00:00.000Z');
    const previous = new Date('2019-02-15T11:32:00.000Z');
    const lastUpdated = calcLastUpdated(current, previous);
    const { days, years, months, minutes, hours, weeks } = lastUpdated;

    const results = {
      years: 0,
      months: 11,
      weeks: 52,
      days: 364,
      hours: 22,
      minutes: 28
    };

    expect(years).toEqual(results.years);
    expect(months).toEqual(results.months);
    expect(weeks).toEqual(results.weeks);
    expect(days).toEqual(results.days);
    expect(hours).toEqual(results.hours);
    expect(minutes).toEqual(results.minutes);
  });

  it('should format the date since the last update', () => {
    const current = new Date('2020-02-15T10:00:00.000Z');
    const previous = new Date('2019-02-15T11:32:00.000Z');
    const lastUpdated: any = calcLastUpdated(current, previous);
    const filteredDate = Object.keys(lastUpdated)
      .filter(key => lastUpdated[key] > 0)
      .map(key => formatDate(key, lastUpdated[key]));

    const result = 'Updated 11 months ago';


    expect(`Updated ${filteredDate[0]}`).toEqual(result);
  });
})