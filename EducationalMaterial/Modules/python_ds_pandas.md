
# Sub-Course: Data Manipulation with Pandas

**Level:** Intermediate
**Parent Course:** Python_for_Data_Science (PYTHON_DS)
**Parent Field:** Technology_Development (TECH_DEV)

**Estimated Content Length:** 15-20 A4 Pages (Approx. 7 hours of study)

**Learning Objectives:**
*   Understand the Pandas Series and DataFrame objects as fundamental tools for data analysis in Python.
*   Learn to create Series and DataFrames from various sources (lists, dictionaries, NumPy arrays, CSV files, Excel files).
*   Master techniques for selecting, indexing (label-based and position-based), and filtering data in DataFrames.
*   Perform common data cleaning tasks: handling missing values, identifying and removing duplicates, and correcting data types.
*   Apply data transformation techniques: adding/removing columns, applying functions to data, sorting, and ranking.
*   Utilize grouping and aggregation functionalities (`groupby`) for insightful data summarization.
*   Learn to merge, join, and concatenate DataFrames to combine data from multiple sources.
*   Understand basic time series data handling in Pandas.

---

## 1. Introduction: The Power of Pandas for Data Wrangling
    *   What is Pandas? A fast, powerful, flexible, and easy-to-use open-source data analysis and manipulation tool, built on top of NumPy.
    *   Why Pandas for data science? (Efficient handling of tabular data, extensive functions for cleaning, transforming, analyzing).
    *   Core data structures: Series and DataFrame.
    *   Installation and importing Pandas (`import pandas as pd`).

## 2. Pandas Series
    *   **Definition:** A one-dimensional labeled array capable of holding any data type (integers, strings, floating point numbers, Python objects, etc.). The axis labels are collectively referred to as the index.
    *   **Creating a Series:**
        *   From a Python list: `pd.Series([1, 2, 3], index=['a', 'b', 'c'])`
        *   From a NumPy array: `pd.Series(np.random.randn(5))`
        *   From a Python dictionary: `pd.Series({'a': 10, 'b': 20, 'c': 30})`
    *   **Attributes:** `index`, `values`, `dtype`, `name`, `size`, `shape`.
    *   **Indexing and Slicing:**
        *   Using labels: `series['a']`, `series[['a', 'c']]`
        *   Using integer positions: `series[0]`, `series[1:3]`
        *   Boolean indexing: `series[series > 10]`
    *   **Operations:** Element-wise arithmetic (like NumPy arrays), applying functions (`.apply()`, `.map()`).
    *   Handling missing data (`.isnull()`, `.notnull()`, `.fillna()`).

## 3. Pandas DataFrame
    *   **Definition:** A two-dimensional, size-mutable, potentially heterogeneous tabular data structure with labeled axes (rows and columns). Can be thought of as a dictionary of Series objects or a spreadsheet/SQL table.
    *   **Creating a DataFrame:**
        *   From a Python dictionary of lists/Series: `pd.DataFrame({'col1': [1, 2], 'col2': [3, 4]})`
        *   From a list of dictionaries: `pd.DataFrame([{'a': 1, 'b': 2}, {'a': 5, 'b': 10, 'c': 20}])`
        *   From a NumPy 2D array: `pd.DataFrame(np.random.rand(3, 2), columns=['foo', 'bar'])`
        *   From a CSV file: `pd.read_csv('file.csv')`
        *   From an Excel file: `pd.read_excel('file.xlsx')`
    *   **Attributes:** `index`, `columns`, `dtypes`, `shape`, `size`, `values`.

## 4. Data Loading and Saving with Pandas
    *   **Reading Data:**
        *   `pd.read_csv(filepath_or_buffer, sep=',', header='infer', index_col=None, usecols=None, dtype=None, na_values=None, parse_dates=None)` - Key parameters.
        *   `pd.read_excel(io, sheet_name=0, header=0, index_col=None, usecols=None)` - Key parameters.
        *   Reading from JSON, SQL databases (`pd.read_json()`, `pd.read_sql()`), HTML tables (`pd.read_html()`).
    *   **Writing Data:**
        *   `df.to_csv(path_or_buf, sep=',', index=True, header=True)`
        *   `df.to_excel(excel_writer, sheet_name='Sheet1', index=True, header=True)`
        *   Writing to other formats.

## 5. Data Inspection and Exploration
    *   **Viewing Data:**
        *   `df.head(n=5)`: First n rows.
        *   `df.tail(n=5)`: Last n rows.
        *   `df.sample(n=5)`: Random sample of n rows.
    *   **Understanding Structure and Types:**
        *   `df.info()`: Concise summary (index dtype, column dtypes, non-null values, memory usage).
        *   `df.shape`: Dimensions (rows, columns).
        *   `df.columns`: List of column names.
        *   `df.index`: Row labels.
        *   `df.dtypes`: Data type of each column.
    *   **Descriptive Statistics:**
        *   `df.describe(include='all')`: Summary statistics (count, mean, std, min, quartiles, max for numerical; count, unique, top, freq for object/categorical).
    *   **Exploring Categorical Data:**
        *   `df['column_name'].value_counts()`: Frequency of unique values.
        *   `df['column_name'].unique()`: Array of unique values.
        *   `df['column_name'].nunique()`: Number of unique values.

## 6. Data Selection and Indexing (Crucial Skill)
    *   **Selecting Columns:**
        *   Single column (returns a Series): `df['column_name']` or `df.column_name` (if name is valid Python identifier and doesn't conflict).
        *   Multiple columns (returns a DataFrame): `df[['col1', 'col2', 'col3']]`
    *   **Selecting Rows (Slicing):**
        *   Using integer positions: `df[0:3]` (rows 0, 1, 2).
    *   **Label-based Selection (`.loc`):**
        *   Selects data by row and column labels.
        *   `df.loc[row_label, column_label]`
        *   `df.loc[row_label]` (selects a single row as Series)
        *   `df.loc[:, column_label]` (selects a single column as Series)
        *   `df.loc[['row_A', 'row_B'], ['col_X', 'col_Y']]` (selects specific rows and columns)
        *   `df.loc['row_start':'row_end', 'col_start':'col_end']` (slicing by labels)
        *   Boolean indexing: `df.loc[df['column'] > value]`
    *   **Position-based Selection (`.iloc`):**
        *   Selects data by integer positions (0-indexed).
        *   `df.iloc[row_position, column_position]`
        *   `df.iloc[row_position]` (selects a single row as Series)
        *   `df.iloc[:, column_position]` (selects a single column as Series)
        *   `df.iloc[[0, 2], [1, 3]]` (selects specific rows and columns by position)
        *   `df.iloc[0:3, 1:4]` (slicing by positions, end index is exclusive)
    *   **Conditional Selection (Boolean Indexing):**
        *   `df[df['age'] > 30]`
        *   `df[(df['age'] > 30) & (df['city'] == 'New York')]` (use `&` for AND, `|` for OR, `~` for NOT; wrap conditions in parentheses).
    *   **Setting Values using `.loc` and `.iloc`.**

## 7. Data Cleaning
    *   **Handling Missing Data (`NaN` - Not a Number):**
        *   Detecting missing values: `df.isnull().sum()`, `df.notnull()`
        *   Dropping missing values: `df.dropna(axis=0/1, how='any'/'all', subset=None, inplace=False)`
        *   Filling missing values: `df.fillna(value, method='ffill'/'bfill', inplace=False)` (fill with a scalar, mean, median, mode, or propagate values).
    *   **Handling Duplicates:**
        *   Identifying duplicates: `df.duplicated(subset=None, keep='first'/'last'/False)`
        *   Removing duplicates: `df.drop_duplicates(subset=None, keep='first'/'last'/False, inplace=False)`
    *   **Changing Data Types:**
        *   `df['column'].astype(new_type)` (e.g., `int`, `float`, `str`, `category`, `datetime64`).
        *   `pd.to_numeric()`, `pd.to_datetime()`, `pd.to_timedelta()`.
    *   **String Manipulation on Series:** Using `.str` accessor (e.g., `df['text_col'].str.lower()`, `df['text_col'].str.replace('old', 'new')`, `df['text_col'].str.split('_').str.get(0)`).
    *   **Replacing Values:** `df.replace(to_replace, value)`.

## 8. Data Transformation
    *   **Adding and Removing Columns:**
        *   Adding: `df['new_col'] = some_value_or_series` or `df.assign(another_new_col = lambda x: x['col1'] + x['col2'])`
        *   Removing: `df.drop('column_name', axis=1, inplace=False)` or `del df['column_name']`
    *   **Applying Functions:**
        *   Element-wise: `df.applymap(func)` (on DataFrame), `series.map(func_or_dict)` (on Series).
        *   Row-wise or Column-wise: `df.apply(func, axis=0/1)`. `func` receives a Series (column or row).
    *   **Sorting Data:**
        *   By index: `df.sort_index(axis=0/1, ascending=True, inplace=False)`
        *   By values: `df.sort_values(by='column_name' or ['col1', 'col2'], ascending=True, inplace=False, na_position='last')`
    *   **Ranking Data:** `df['column'].rank(method='average'/'min'/'max'/'first'/'dense')`
    *   **Binning/Discretization:** Converting continuous data into discrete bins using `pd.cut()` or `pd.qcut()`.

## 9. Grouping and Aggregation (`groupby`)
    *   The "Split-Apply-Combine" pattern.
    *   **Splitting:** `grouped = df.groupby('key_column')` or `df.groupby(['key1', 'key2'])`. This creates a `DataFrameGroupBy` object.
    *   **Applying:** Applying an aggregation function to each group.
        *   Common aggregations: `grouped.sum()`, `mean()`, `median()`, `count()`, `size()`, `std()`, `var()`, `min()`, `max()`, `first()`, `last()`, `nunique()`.
        *   Multiple aggregations: `grouped.agg({'col_A': ['sum', 'mean'], 'col_B': 'count'})`
        *   Custom aggregation functions: `grouped.agg(lambda x: x.max() - x.min())`
    *   **Combining:** Results are automatically combined into a new DataFrame or Series.
    *   Iterating through groups: `for name, group in grouped: ...`
    *   Filtering groups: `grouped.filter(lambda x: x['values'].mean() > threshold)`
    *   Transforming groups: `grouped.transform(lambda x: (x - x.mean()) / x.std())` (Z-score normalization within groups).

## 10. Combining DataFrames: Merge, Join, Concatenate
    *   **Concatenation (`pd.concat`):** Stacking DataFrames along an axis (rows or columns).
        *   `pd.concat([df1, df2], axis=0)` (stack rows)
        *   `pd.concat([df1, df2], axis=1)` (stack columns side-by-side, aligns on index)
    *   **Merging (`pd.merge`):** SQL-style joins based on common columns or indices.
        *   `pd.merge(left_df, right_df, on='key_column', how='inner'/'left'/'right'/'outer')`
        *   `on`: Column(s) to join on.
        *   `how`: Type of merge (inner, left, right, outer).
        *   `left_on`, `right_on`: If key column names differ.
        *   `left_index=True`, `right_index=True`: To join on indices.
    *   **Joining (`df.join`):** Convenient method for joining DataFrames primarily on their indices (or on a key column in one of them). Simpler syntax for common index-based joins.
        *   `df1.join(df2, on='key_col_in_df1', how='left', lsuffix='_left', rsuffix='_right')`

## 11. Basic Time Series Handling
    *   Pandas has powerful capabilities for time series data.
    *   Converting columns to datetime objects: `pd.to_datetime(df['date_column'])`.
    *   Setting a datetime column as the index: `df.set_index('date_column', inplace=True)`.
    *   Time-based indexing and slicing.
    *   Resampling: Aggregating or changing frequency of time series data (e.g., daily to monthly `df.resample('M').mean()`).
    *   Rolling windows: `df['col'].rolling(window=30).mean()` (30-day moving average).

## 12. Conclusion & Next Steps
    *   Recap of Pandas as a cornerstone for data analysis in Python.
    *   Importance of practice with real datasets.
    *   Transition to data visualization (Matplotlib/Seaborn) and machine learning (Scikit-learn), which heavily rely on Pandas DataFrames.

**Potential Activities/Exercises:**
*   Load a CSV dataset, inspect its basic properties (`.info()`, `.describe()`).
*   Select specific rows and columns using `.loc` and `.iloc`.
*   Filter the DataFrame based on multiple conditions.
*   Handle missing values in a chosen column (e.g., fill with mean or drop).
*   Group data by a categorical column and calculate average values for a numerical column.
*   Merge two simple DataFrames.

**Suggested Readings/Resources:**
*   "Python for Data Analysis" by Wes McKinney.
*   Pandas official documentation and tutorials.
*   Online courses focusing on Pandas (DataCamp, Coursera, Udemy).
This is placeholder_content_for_python_ds_pandas.md
