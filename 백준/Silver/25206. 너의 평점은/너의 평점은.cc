#include <iostream>
#include <string>
using namespace std;

string name, score;
double number, classNum;

int main() {
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	cout << fixed;
	cout.precision(6);

	double result = 0.000000;

	for (int i = 0; i < 20; i++) {
		cin >> name >> number >> score;
		if (score == "A+") result += number * 4.500000;
		if (score == "A0") result += number * 4.000000;
		if (score == "B+") result += number * 3.500000;
		if (score == "B0") result += number * 3.000000;
		if (score == "C+") result += number * 2.500000;
		if (score == "C0") result += number * 2.000000;
		if (score == "D+") result += number * 1.500000;
		if (score == "D0") result += number * 1.000000;
		if (score == "P") classNum -= number;
		classNum += number;
	}

	cout << result / classNum << "\n";

	return 0;
}