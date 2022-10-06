#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

int main() {
	vector<char> WB = { 'W', 'B', 'W', 'B', 'W', 'B', 'W', 'B' };
	vector<char> BW = { 'B', 'W', 'B', 'W', 'B', 'W', 'B', 'W' };
	vector<vector<char>> WBBoard = { WB, BW, WB, BW, WB, BW, WB, BW };
	vector<vector<char>> BWBoard = { BW, WB, BW, WB, BW, WB, BW, WB };

	int M, N;
	cin >> M >> N;
	vector<char> v;
	vector<vector<char>> board(M, v);
	for (int i = 0; i < M; i++ ) {
		for (int j = 0; j < N; j++) {
			char input;
			cin >> input;
			board[i].push_back(input);
		}
	}

	int minValue = 2500;
	for (int i = 0; i < M - 7; i++) {
		for (int j = 0; j < N - 7; j++) {
			int WBCount = 0, BWCount = 0;
			for (int k = 0; k < 8; k++) {
				for (int l = 0; l < 8; l++) {
					if (WBBoard[k][l] != board[i + k][j + l]) WBCount++;
					if (BWBoard[k][l] != board[i + k][j + l]) BWCount++;
				}
			}
			minValue = min(min(WBCount, BWCount), minValue);
		}
	}
	cout << minValue << "\n";
}