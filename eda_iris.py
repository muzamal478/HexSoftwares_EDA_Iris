# Import libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_iris

# Load the dataset
iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['species'] = iris.target
df['species'] = df['species'].map({0: 'setosa', 1: 'versicolor', 2: 'virginica'})

# Data Cleaning
# Check for missing values
print("Missing values:\n", df.isnull().sum())  # No missing values in Iris

# Basic Statistical Analysis
print("Data Summary:\n", df.describe())

# Visualizations
# Pairplot for distributions and correlations
sns.pairplot(df, hue='species')
plt.title('Pairplot of Iris Dataset')
plt.savefig('images/pairplot.png')
plt.close()

# Correlation Heatmap
plt.figure(figsize=(10, 8))
sns.heatmap(df.corr(numeric_only=True), annot=True, cmap='coolwarm')
plt.title('Correlation Heatmap')
plt.savefig('images/heatmap.png')
plt.close()

# Histograms for feature distributions
df.hist(figsize=(10, 8))
plt.suptitle('Feature Distributions')
plt.savefig('images/histograms.png')
plt.close()

print("EDA completed. Visualizations saved as PNG files.")