#CS513- Knowledge Discovery and Data Mining
#Vyom Shah 
#10446209
#HomeWork 2

#Clear the memory
rm(list=ls())

#Task 1
# Load Breast cancer data file CSV
breastcancerdata <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Assignments/breast-cancer-wisconsin.data.csv",na.string="?")

# View Breast cancer data file 
View(breastcancerdata)

#Task 1.1
# Summarise each column
summary(breastcancerdata)

#Task 1.2
#Identifying missing values
df<-data.frame(breastcancerdata)
#Number of missing values in set
sum(is.na(df))
# Number of missing values in a row in set
colSums(is.na(df))

#Task 1.3
#Replacing missing values with mean of the column
for(i in 1:ncol(df)){
  df[is.na(df[,i]), i] <- mean(df[,i], na.rm = TRUE)
}
View(df)

#Task 1.4
#Displaying the frequency table of Class vs. F6
ftable(df$Class,df$F6)

#Task 1.5
#Displaying the scatter plot of F1 to F6, one pair at a time
pairs(df[2:7],main = "Breast Cancer Wisconsin Data")

#Task 1.6
#Show histogram box plot for columns F7 to F9

boxplot(df[8:10])


#Task 2
#Delete all objects from R environment
rm(list=ls())

#Reload the data into R
breastcancerdata1 <- read.csv("C:/Users/vyom/Desktop/SIT/CS513/Assignments/breast-cancer-wisconsin.data.csv",na.string="?")
View(breastcancerdata1)
nrow(breastcancerdata1)

#Remove the row with missing values
breastcancerdata2<-na.omit(breastcancerdata1)
View(breastcancerdata2)
nrow(breastcancerdata2)

##############END##################